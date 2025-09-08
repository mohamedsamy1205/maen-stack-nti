const express = require('express');
const router = express.Router();
const { getUsers, createUser } = require('../controller/UserController.js');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mydb').then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

router.post('/adduser', createUser);
router.get('/getuser', getUsers);

module.exports = router;