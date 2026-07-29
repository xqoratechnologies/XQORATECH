import { createServerFn } from "@tanstack/react-start";

export type Application = {
  rowNumber: number;
  date: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  resumeUrl: string;
  status: string;
};

// Ensure credentials are provided
const GOOGLE_SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");
const GOOGLE_SHEET_ID = process.env.GOOGLE_SHEET_ID;

async function getGoogleAuth() {
  const { google } = await import("googleapis");
  if (!GOOGLE_SERVICE_ACCOUNT_EMAIL || !GOOGLE_PRIVATE_KEY) {
    throw new Error("Missing Google Service Account credentials");
  }
  return new google.auth.GoogleAuth({
    credentials: {
      client_email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: GOOGLE_PRIVATE_KEY,
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
}

export const getApplicationsFn = createServerFn({ method: "GET" }).handler(
  async () => {
    try {
      if (!GOOGLE_SHEET_ID) {
        throw new Error("Missing GOOGLE_SHEET_ID");
      }

      const auth = await getGoogleAuth();
      const { google } = await import("googleapis");
      const sheets = google.sheets({ version: "v4", auth });

      const response = await sheets.spreadsheets.values.get({
        spreadsheetId: GOOGLE_SHEET_ID,
        range: "Sheet1!A:H", // Assuming Date, Name, Email, Phone, Role, Resume URL, Status etc.
      });

      const rows = response.data.values;
      if (!rows || rows.length === 0) {
        return { applications: [] };
      }

      // Map rows to application objects
      // Assuming headers in row 1, data starts row 2.
      // 0: Timestamp, 1: Name, 2: Email, 3: Phone, 4: Role, 5: File Name, 6: File URL, 7: Status
      const applications: Application[] = rows.slice(1).map((row, index) => {
        return {
          rowNumber: index + 2, // +2 because 0-indexed, and row 1 is header
          date: row[0] || "",
          name: row[1] || "",
          email: row[2] || "",
          phone: row[3] || "",
          role: row[4] || "",
          resumeUrl: row[6] || "",
          status: row[7] || "Pending",
        };
      });

      return { applications };
    } catch (error: any) {
      console.error("Error fetching applications:", error);
      throw new Error("Failed to fetch applications.");
    }
  }
);

export const updateApplicationStatusFn = createServerFn({ method: "POST" })
  .validator((data: { rowNumber: number; status: "Accepted" | "Rejected"; name: string; email: string; role: string }) => data)
  .handler(async ({ data }) => {
    const { rowNumber, status, name, email, role } = data;

    try {
      if (!GOOGLE_SHEET_ID) {
        throw new Error("Missing GOOGLE_SHEET_ID");
      }

      const auth = await getGoogleAuth();
      const { google } = await import("googleapis");
      const sheets = google.sheets({ version: "v4", auth });

      // Assuming Status is in column H (which is column index 7)
      // Let's update range `Sheet1!H${rowNumber}`
      await sheets.spreadsheets.values.update({
        spreadsheetId: GOOGLE_SHEET_ID,
        range: `Sheet1!H${rowNumber}`,
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [[status]],
        },
      });

      // Send Email using Resend
      if (!process.env.RESEND_API_KEY) {
        console.warn("RESEND_API_KEY is not set. Skipping email notification.");
        return { success: true, message: "Status updated but email was skipped (No Resend API Key)." };
      }

      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);

      let emailSubject = "";
      let emailHtml = "";

      if (status === "Accepted") {
        emailSubject = `Congratulations! You've been selected for ${role} at XQORA`;
        emailHtml = `
          <div style="font-family: sans-serif; padding: 20px;">
            <h2>Congratulations, ${name}!</h2>
            <p>We are thrilled to inform you that you have been selected for the <strong>${role}</strong> position at XQORA Technologies.</p>
            <p>Our team was very impressed with your skills and background.</p>
            <p>We will be in touch shortly with the next steps regarding your onboarding and offer details.</p>
            <br/>
            <p>Best Regards,</p>
            <p><strong>XQORA Talent Team</strong></p>
          </div>
        `;
      } else {
        emailSubject = `Update on your application for ${role} at XQORA`;
        emailHtml = `
          <div style="font-family: sans-serif; padding: 20px;">
            <h2>Hi ${name},</h2>
            <p>Thank you for taking the time to apply for the <strong>${role}</strong> position at XQORA Technologies.</p>
            <p>Unfortunately, we have decided not to move forward with your application at this time. However, we were very impressed by your qualifications and will keep your resume on file for future openings that may be a better fit.</p>
            <p>We wish you the best of luck in your job search!</p>
            <br/>
            <p>Best Regards,</p>
            <p><strong>XQORA Talent Team</strong></p>
          </div>
        `;
      }

      const senderEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
      const { error: resendError } = await resend.emails.send({
        from: `XQORA Careers <${senderEmail}>`,
        to: email,
        subject: emailSubject,
        html: emailHtml,
      });

      if (resendError) {
        throw new Error(`Resend API Error: ${resendError.message}`);
      }

      return { success: true, message: `Status updated to ${status} and email sent.` };
    } catch (error: any) {
      console.error("Error updating application status:", error);
      throw new Error(error.message || "Failed to update application status.");
    }
  });
