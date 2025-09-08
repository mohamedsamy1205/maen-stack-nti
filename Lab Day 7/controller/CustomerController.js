const express = require('express');
const app = express()
app.use(express.json())
const fs = require('fs');
const path = require("path");

const filePath = path.join(__dirname, "../models/customers.json");
const IsFileExists = (filePath) => {
    return !fs.existsSync(filePath) ? fs.writeFileSync(filePath, JSON.stringify([]), 'utf-8') : null;
}

const read = () => {
    IsFileExists(filePath);
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}
const write = (data) => {
    IsFileExists(filePath);
    fs.writeFileSync(filePath, JSON.stringify(data), 'utf-8');
}

const getAllCustomers = (req, res) => {
    const customers = read();
    res.json(customers);
}

const getCustomerByName = (req, res) => {
    const customers = read();
    const customer = customers.find(c => c.name === req.params.name);
    if (!customer) return res.status(404).send('Customer not found');
    res.json(customer);
    return customer;
}

const addCustomer = (req, res) => {
    const customers = read();
    const newCustomer = {
        id: customers.length + 1,
        ...req.body
    };
    customers.push(newCustomer);
    write(customers);
    res.status(201).json(newCustomer);
}

module.exports = {
    getAllCustomers,
    getCustomerByName,
    addCustomer
};
