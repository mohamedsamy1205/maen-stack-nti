const express = require("express")
const router = express.Router()
const paymentController = require('../controller/paymentController')

router.post("/payment", paymentController.addPayment)
router.get("/payments", paymentController.getAllPayments)

module.exports = router
