// api/sheets.js
const { google } = require('googleapis');

export default async function handler(req, res) {
    try {
        const sheets = google.sheets('v4');
        const auth = new google.auth.GoogleAuth({
            // Your authentication credentials
            // You can use a service account key or API key here
        });

        const client = await auth.getClient();
        const spreadsheetId = 'YOUR_SPREADSHEET_ID'; // Replace with your actual spreadsheet ID
        const range = 'CSV!A1:Z100'; // Change this range as needed

        const response = await sheets.spreadsheets.values.get({
            auth: client,
            spreadsheetId,
            range,
        });

        res.status(200).json(response.data);
    } catch (error) {
        console.error('Error fetching data from Google Sheets:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
}
