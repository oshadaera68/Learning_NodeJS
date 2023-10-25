const express = require('express');
const CustomerController = require('../controller/CustomerController');
const verifyToekn = require('../middleware/AuthMiddleware');
const router = express.Router();

router.post('/save-customer',verifyToekn,CustomerController.saveCustomer);
router.put('/update-customer',verifyToekn,CustomerController.updateCustomer);
router.delete('/delete-customer',verifyToekn,CustomerController.deleteCustomer);
router.get('/get-customer',verifyToekn,CustomerController.findCustomer);
router.get('/get-all-customers',verifyToekn,CustomerController.findAllCustomers);

module.exports=router;