const express = require("express")
const app = express()
const CustomerRouter = require('./routes/customer')
const BookRouter = require('./routes/books')
const PaymentRouter = require('./routes/pyments')
app.use(express.json())


app.use('/api/v1/customers', CustomerRouter)
app.use('/api/v1/books', BookRouter)
app.use('/api/v1/payments', PaymentRouter)


app.listen(3001, () => {
    console.log("Server is running on port 3001");
});

