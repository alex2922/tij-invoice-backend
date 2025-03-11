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
  status: String,
});

module.exports = mongoose.model("Invoice", invoiceSchema);
