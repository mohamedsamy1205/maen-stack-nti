const express = require('express');
const app = express();

const fs = require('fs');
app.use(express.json());
if (!fs.existsSync('user.json')) {
  fs.writeFileSync('user.json', JSON.stringify([]));
}
if (!fs.existsSync('product.json')) {
  fs.writeFileSync('product.json', JSON.stringify([]));
}
let users = JSON.parse(fs.readFileSync('user.json'));
let products = JSON.parse(fs.readFileSync('product.json'));

const addUser = (name , email) => {
  const obj = {id: users.length + 1, name, email };
  users.push(obj);
  fs.writeFileSync('user.json', JSON.stringify(users));
}





const getUsers = (req, res) => {
    res.status(200).json(users);
}


const createUser = (req, res) => {
    const { name, email } = req.body;
    addUser(name, email);
    res.status(201).send('User added successfully');
}

module.exports = { getUsers, createUser };