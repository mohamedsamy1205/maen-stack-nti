const express = require('express');
const app = express()
app.use(express.json())
const fs = require('fs');
const path = require("path");
const filePath = path.join(__dirname, "../models/Books.json");
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

const getAllBooks = (req, res) => {
    const books = read();
    res.json(books);
}

const getBookByName = (req, res) => {
    const books = read();
    const book = books.find(b => b.name === req.params.name);
    if (!book) return res.status(404).send('Book not found');
    res.json(book);
    return book;
}

const addBook = (req, res) => {
    const books = read();
    const newBook = {
        id: books.length + 1,
        ...req.body
    };
    books.push(newBook);
    write(books);
    res.status(201).json(newBook);
}
module.exports = {
    getAllBooks,
    getBookByName,
    addBook
};
