const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config()
const port = process.env.SERVER_PORT || 3000;

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/customer_crud')
.then(() => {
    app.listen(port, ()=>{
        console.log(`api started & running on port ${port}`);
    });
});

app.use('/', (req,resp,next)=>{
    resp.send('<h1>Server Works!!</h1>')
});