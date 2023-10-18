const express = require('express');
const bodyParser = require('body-parser');


require('dotenv').config();


const app = express();


const customerRoute = require('./routes/customerRoute');


app.use(bodyParser.urlencoded({extended:false}));


app.use('/api/v1/admin/customers',customerRoute);


app.use((req,res,next)=>{
    res.status(404).send('<h1>Page Not Found!</h1>');
});


const port = process.env.SERVER_PORT || 3000;


app.listen(port,()=>{
    console.log(`Server Started & running on port ${port}`);
});
