const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema({
  dateOfJourney: Number,
  bookingDate: Number,
  invoiceNumber: String,
  clientName: String,
  clientPayment: String,
  systemReference: String,
  portalOfBooking: String,
  gstDetails: String,
  departureCity: String,
  arrivalCity: String,
  travelType: String,
  netPurchase: Number,
  markupCommissionFees: Number,
  gst: Number,
  invoiceAmount: Number,
  modeOfPayment: String,
  netProfit: Number,
  status: String
}, { timestamps: true });

// ✅ Fix: Prevent "Cannot overwrite `Invoice` model once compiled."
const Invoice = mongoose.models.Invoice || mongoose.model("Invoice", invoiceSchema);

module.exports = Invoice;
