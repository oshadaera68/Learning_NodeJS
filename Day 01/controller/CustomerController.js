const saveCustomer = (req,resp)=>{
    console.log(req.body);
    resp.status(201).send('<h1>Customer Saved</h1>');
}
module.exports= {
    saveCustomer
};
