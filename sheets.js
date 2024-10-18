// api/sheets.js
export default async function handler(req, res) {
    const SHEET_ID = process.env.SHEET_ID; // sheet id in env
    const API_KEY = process.env.GOOGLE_API_KEY; // Store your API key in Vercel environment variables
  
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/Sheet1?key=${API_KEY}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      if (response.ok) {
        res.status(200).json(data);
      } else {
        res.status(500).json({ error: "Error fetching Google Sheet data" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error fetching Google Sheet data" });
    }
  }
  