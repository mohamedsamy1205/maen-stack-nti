
const express = require('express');
app = express()
const fs = require('fs');
const path = require("path");
const getCustomerByName = require('./CustomerController')
const getBookByName = require('./BookController')
const filePath = path.join(__dirname, "../models/Payments.json");

const IsFileExists = (filePath) => {
    return !fs.existsSync(filePath) ? fs.writeFileSync(filePath, JSON.stringify([]), 'utf-8') : null;
}

const read = () => {
    IsFileExists(filePath);
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}



const addPayment = (req, res) => {
    const payments = read();
    const customer = getCustomerByName(req.body.customerName);
    const book = getBookByName(req.body.bookName);
    const newPayment = {
        id: payments.length + 1,
        customer: customer.name,
        phoneNumber: customer.phoneNumber,
        book: book.name,
        amount: book.price,
    };
    payments.push(newPayment);
    write(payments);
    res.status(201).json(newPayment);
}

const getAllPayments = (req, res) => {
    const payments = read();
    res.json(payments);
}

module.exports = {
    addPayment,
    getAllPayments
};
