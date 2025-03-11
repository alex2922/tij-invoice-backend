const express = require("express");
const router = express.Router();
const Invoice = require("../models/Invoice");
const fs = require("fs");
const path = require("path");
const { Parser } = require("json2csv");

router.get("/export-csv", async (req, res) => {
  try {
    const invoices = await Invoice.find({});
    if (!invoices.length) {
      return res.status(404).json({ error: "No invoices found" });
    }

    // Define fields for CSV
    const fields = [
      "dateOfJourney",
      "bookingDate",
      "invoiceNumber",
      "clientName",
      "clientPayment",
      "systemReference",
      "portalOfBooking",
      "gstDetails",
      "departureCity",
      "arrivalCity",
      "travelType",
      "netPurchase",
      "markupCommissionFees",
      "gst",
      "invoiceAmount",
      "modeOfPayment",
      "netProfit",
      "status",
    ];

    const opts = { fields };
    const parser = new Parser(opts);
    const csv = parser.parse(invoices);

    // Define file path
    const filePath = path.join(__dirname, "../exports/invoices.csv");

    // Ensure the directory exists
    if (!fs.existsSync(path.dirname(filePath))) {
      fs.mkdirSync(path.dirname(filePath), { recursive: true });
    }

    // Write CSV file
    fs.writeFileSync(filePath, csv);

    // Send file to user
    res.download(filePath, "invoices.csv", (err) => {
      if (err) {
        console.error("File download error:", err);
        res.status(500).json({ error: "Error sending file" });
      }
    });

  } catch (error) {
    console.error("Export error:", error); // Log full error
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
