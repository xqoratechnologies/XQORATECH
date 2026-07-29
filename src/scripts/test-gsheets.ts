import { google } from "googleapis";

async function testGoogleSheets() {
  const GOOGLE_SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  let GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY;
  const GOOGLE_SHEET_ID = process.env.GOOGLE_SHEET_ID;

  if (!GOOGLE_SERVICE_ACCOUNT_EMAIL || !GOOGLE_PRIVATE_KEY || !GOOGLE_SHEET_ID) {
    console.error("❌ Missing one or more environment variables in .env!");
    return;
  }

  // Handle newlines
  GOOGLE_PRIVATE_KEY = GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n");

  try {
    console.log("Authenticating with Google...");
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: GOOGLE_PRIVATE_KEY,
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    console.log(`Fetching data from Spreadsheet ID: ${GOOGLE_SHEET_ID}`);
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: GOOGLE_SHEET_ID,
      range: "Sheet1!A:H", // Testing the default range
    });

    console.log("✅ Successfully connected to Google Sheets!");
    console.log(`Found ${response.data.values?.length || 0} rows in Sheet1!`);
    
  } catch (error: any) {
    console.error("❌ Google Sheets API Error:");
    console.error(error.message);
  }
}

testGoogleSheets();
