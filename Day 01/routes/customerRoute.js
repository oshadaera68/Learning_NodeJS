const path = require('path');
const express = require('express');
const router= express.Router();
const customerController = require('../controller/CustomerController');


router.get('/new-customer-form',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','new-customer-form.html'));
});


router.post('/new-customer',customerController.saveCustomer);


router.get('/update-customer-form',(req,res,next)=>{
    console.log('Customer update form!');
});
router.put('/update-customer',(req,res,next)=>{
    console.log('Customer update!');
});


router.delete('/delete-customer',(req,res,next)=>{
    console.log('Customer delete!');
});


router.get('/',(req,res,next)=>{
    res.send('<h1>Customer Saved...</h1>');
});


module.exports = router;