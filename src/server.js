const express = require("express");
const axios = require("axios");
const cors = require("cors");
const moment = require("moment"); // Import moment.js for date handling

const app = express();
app.use(cors()); // Enable CORS for all origins

// Default route
app.get("/", (req, res) => {
    res.send("✅ NSE Option Chain API is running!");
});

// Fetch and filter NSE Option Chain Data
app.get("/api/nse-option-chain", async (req, res) => {
    try {
        const response = await axios.get(
            "https://www.nseindia.com/api/option-chain-indices?symbol=NIFTY",
            {
                headers: {
                    "User-Agent":
                        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
                    "Accept-Language": "en-US,en;q=0.9",
                    "Referer": "https://www.nseindia.com/option-chain",
                    "Connection": "keep-alive",
                    "Cache-Control": "no-cache",
                },
            }
        );

        // Extract all expiry dates from API response
        let expiryDates = response.data.records.expiryDates;
        
        // Get today's date
        const today = moment().format("YYYY-MM-DD");

        // Filter: Get 5 expiry dates before and 5 after today's date
        expiryDates = expiryDates
            .map(date => moment(date, "DD-MMM-YYYY")) // Convert to moment.js format
            .sort((a, b) => a - b) // Sort by date
            .filter(date => date.isValid()); // Remove invalid dates

        // Find index of today's expiry or closest one
        const todayIndex = expiryDates.findIndex(date => date.isSameOrAfter(moment(today)));

        let selectedDates;
        if (todayIndex === -1) {
            selectedDates = expiryDates.slice(-10); // If no match, return last 10
        } else {
            const start = Math.max(0, todayIndex - 5);
            const end = Math.min(expiryDates.length, todayIndex + 5);
            selectedDates = expiryDates.slice(start, end);
        }

        // Convert back to string format
        selectedDates = selectedDates.map(date => date.format("DD-MMM-YYYY"));

        res.json({ selectedExpiryDates: selectedDates });
    } catch (error) {
        console.error("❌ Error fetching NSE data:", error.message);
        res.status(500).json({ error: "Failed to fetch NSE data" });
    }
});

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
