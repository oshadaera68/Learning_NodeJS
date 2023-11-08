const express = require('express');
const router = express.Router();

const CustomerController= require('../controllers/CustomerController');


router.get('',CustomerController.initializeUi);

module.exports=router;