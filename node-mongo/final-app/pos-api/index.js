/*
 * express (npm i express)
 * mongoose (npm i mongoose)
 * nodemon (npm i -g nodemon)
 * dotenv (npm i dotenv)
 * body-parser (npm i body-parser)
 * bcrypt (npm i bcrypt)
 * jsonwebtoken (npm i jsonwebtoken)
 * */

const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const bodyParser = require("body-parser");
const port = process.env.SERVER_PORT | 3000;
const app = express();

//----------
const userRoute = require("./routes/UserRoute");
const customerRoute = require("./routes/CustomerRoute");
const productRoute = require("./routes/ProductRoute");
const orderRoute = require("./routes/OrderRoute");
//----------

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1:27017/posapi", {
  useNewUrlParser: true,
});

app.listen(port, () => {
  console.log(`Server started and running on port ${port}`);
});

app.get("/test-api", (req, resp) => {
  return resp.json({ message: "server started" });
});

app.use("/api/v1/users", userRoute);
app.use("/api/v1/orders", orderRoute);
app.use("/api/v1/products", productRoute);
app.use("/api/v1/customers", customerRoute);
