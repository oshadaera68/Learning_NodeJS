const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const expressHandlebars = require("express-handlebars").engine;
require("dotenv").config();
const app = express();
const serverPort = process.env.SERVER_PORT || 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));
app.engine(
  "hbs",
  expressHandlebars({
    extname: ".hbs",
    layoutsDir: __dirname + "/views/layouts",
  })
);
app.set("view engine", ".hbs");
app.get("", (req, resp) => {
  resp.render("home");
});
app.listen(serverPort, () => {
  console.log(`Server Started & Running on port ${serverPort}`);
});
