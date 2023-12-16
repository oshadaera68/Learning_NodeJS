const express = require("express");
const userControler = require("../controller/UserController");
const router = express.Router();

router.post("/register", userControler.register);

module.exports = router;
