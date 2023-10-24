const express = require('express');
const router = express.Router();

const customerController = require('../controller/CustomerController');

router.post('/create', customerController.createCustomer)
router.get('/find/:nic', customerController.findCustomer)
router.put('/update', customerController.updateCustomer)
router.post('/remove/:nic', customerController.deleteCustomer)
router.post('/find-all', customerController.findAllCustomers)

module.exports=router;