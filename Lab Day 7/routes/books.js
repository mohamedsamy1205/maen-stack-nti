const express = require("express")
const router = express.Router()
router.use(express.json())
const {getAllBooks,getBookByName,addBook} = require('../controller/BookController')

router.get('/getall', getAllBooks)
router.get('/:name', getBookByName)
router.post('/add', addBook)



module.exports = router