import { google } from "googleapis";

async function testUpdate() {
  const GOOGLE_SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  let GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY;
  const GOOGLE_SHEET_ID = process.env.GOOGLE_SHEET_ID;

  if (!GOOGLE_SERVICE_ACCOUNT_EMAIL || !GOOGLE_PRIVATE_KEY || !GOOGLE_SHEET_ID) {
    console.error("Missing env vars");
    return;
  }
  GOOGLE_PRIVATE_KEY = GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n");

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: GOOGLE_PRIVATE_KEY,
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    console.log("Attempting to write to Sheet1!H2...");
    const response = await sheets.spreadsheets.values.update({
      spreadsheetId: GOOGLE_SHEET_ID,
      range: "Sheet1!H2",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [["Test Write"]],
      },
    });

    console.log("✅ Successfully wrote to the sheet:", response.data.updatedRange);
    
    // Clear it
    await sheets.spreadsheets.values.update({
      spreadsheetId: GOOGLE_SHEET_ID,
      range: "Sheet1!H2",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [["Pending"]],
      },
    });

  } catch (error: any) {
    console.error("❌ Write Error:");
    console.error(error.message);
  }
}

testUpdate();
