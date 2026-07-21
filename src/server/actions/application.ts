import { createServerFn } from "@tanstack/react-start";

export const submitApplicationFn = createServerFn({ method: "POST" })
  .validator((data: FormData) => data)
  .handler(async ({ data }) => {
    try {
      const name = data.get("name") as string;
      const email = data.get("email") as string;
      const phone = data.get("phone") as string;
      const role = data.get("role") as string;
      const resume = data.get("resume") as File;

      if (!name || !email || !role || !resume) {
        throw new Error("Missing required fields");
      }

      const scriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL;

      if (!scriptUrl) {
        throw new Error(
          "GOOGLE_APPS_SCRIPT_URL is missing in environment variables. Please deploy the Apps Script and add the URL."
        );
      }

      // Convert file to Base64 for Apps Script
      const arrayBuffer = await resume.arrayBuffer();
      const base64 = Buffer.from(arrayBuffer).toString("base64");

      const payload = {
        name,
        email,
        phone,
        role,
        fileName: resume.name,
        mimeType: resume.type || "application/pdf",
        fileBase64: base64,
      };

      // Send to Google Apps Script Web App
      // Apps Script requires POST requests to handle redirects, so we use follow mode.
      const response = await fetch(scriptUrl, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "text/plain;charset=utf-8", 
        },
        redirect: "follow"
      });

      if (!response.ok) {
        throw new Error(`Google Apps Script returned ${response.status} ${response.statusText}`);
      }

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.error || "Failed to submit application via Apps Script.");
      }

      return { success: true, message: "Application submitted successfully!", url: result.url };
    } catch (error: any) {
      console.error("Error submitting application:", error);
      throw new Error(error.message || "An error occurred while submitting the application.");
    }
  });
