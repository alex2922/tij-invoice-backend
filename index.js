require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Invoice = require("./models/Invoice"); // ✅ Import it once

const app = express();
app.use(express.json());
app.use(cors());





// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected Locally"))
  .catch(err => console.error("MongoDB Connection Error:", err));

app.get("/", (req, res) => {
  res.send("API is running...");
});

// ✅ Import routes only once
const invoiceRoutes = require("./routes/invoiceRoutes");
app.use("/api/invoices", invoiceRoutes);

app.use("/api/invoices", require("./routes/invoiceRoutes"));


app.post("/add-invoice", async (req, res) => {
    try {
      const newInvoice = new Invoice(req.body);
      await newInvoice.save();
      res.status(201).json({ message: "Invoice added successfully!" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
