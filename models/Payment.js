const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  paidBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  paidFor: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }],
  amountPerPerson: Number,
  totalAmount: Number,
  time: String,
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Payment", paymentSchema);