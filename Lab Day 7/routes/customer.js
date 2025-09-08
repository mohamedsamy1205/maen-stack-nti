const express = require("express")
const router = express.Router()
router.use(express.json())
const {getAllCustomers,getCustomerByName,addCustomer} = require('../controller/CustomerController')

router.get('/getall', getAllCustomers)
router.get('/:name', getCustomerByName)
router.post('/add', addCustomer)



module.exports = router