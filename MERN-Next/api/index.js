const express = require("express");
const mysql = require("mysql");
const app = express();

require("dotenv").config();
const port = process.env.SERVER_PORT;
const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
});

db.connect((err) => {
  if (err) {
    console.log(
      "something went wrong with the database initialization" + err.stack
    );
    process.exit(1);
  } else {
    app.listen(port, () => {
      console.log(`Server up and running on port ${port}`);
    });
  }
});