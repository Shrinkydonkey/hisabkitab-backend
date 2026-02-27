const express = require("express");
const router = express.Router();
const Payment = require("../models/Payment");

router.post("/create", async (req, res) => {

  try {
    const payment = new Payment(req.body);
    await payment.save();
    res.json({ message: "Payment recorded successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error saving payment" });
  }

});

module.exports = router;