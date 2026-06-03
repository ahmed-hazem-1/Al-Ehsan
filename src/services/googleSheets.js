// Google Sheets Form Submission Service
// Google Sheet URL: https://docs.google.com/spreadsheets/d/1ouKbJ_7Keh8e93xRwhUY5jjnYpuOnEH1WNT2ZPM2zNc/edit

// You can configure this either by changing this variable directly, or by setting VITE_GOOGLE_SCRIPT_URL in your .env file.
export const GOOGLE_SCRIPT_WEBAPP_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbwmra_CwQr-GNeP9dteqKw46wIBnXLT4GVYMrig7yK9swenE2OcTHYNLiTcHSDbVyUF/exec';

/**
 * Submits the consultation lead form data to the Google Sheet.
 * Uses URLSearchParams (x-www-form-urlencoded) to prevent CORS preflight requests.
 * 
 * @param {Object} data - The form data object { name, facility, title, phone, email, challenge }
 * @returns {Promise<{success: boolean, error?: string, mock?: boolean}>}
 */
export async function submitLeadToGoogleSheets(data) {
  if (!GOOGLE_SCRIPT_WEBAPP_URL) {
    console.warn(
      "Google Apps Script Web App URL is not configured. " +
      "Please deploy the script and add the URL to src/services/googleSheets.js or VITE_GOOGLE_SCRIPT_URL in .env."
    );
    // Return mock success for development/testing if no URL is provided yet
    return { success: true, mock: true };
  }

  try {
    const params = new URLSearchParams();
    Object.entries(data).forEach(([key, value]) => {
      params.append(key, value);
    });

    await fetch(GOOGLE_SCRIPT_WEBAPP_URL, {
      method: 'POST',
      mode: 'no-cors', // Avoids CORS preflight/redirect issues with Google Apps Script
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    });

    // Note: With 'no-cors', the response type will be 'opaque' and status 0,
    // but the request is sent successfully and the data is written to the sheet.
    return { success: true };
  } catch (error) {
    console.error("Error submitting form to Google Sheets:", error);
    return { success: false, error: error.message };
  }
}
