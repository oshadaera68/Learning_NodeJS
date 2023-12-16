const express = require("express");
const customerController = require("../controller/CustomerController");
const verifyUser = require("../middleware/AuthMiddleware");
const router = express.Router();

router.post("/create", verifyUser, customerController.create);
router.get("/find-by-id", verifyUser, customerController.findById);
router.delete("/delete-by-id", verifyUser, customerController.deleteById);
router.put("/update", verifyUser, customerController.update);
router.get("/find-all", verifyUser, customerController.findAll);

module.exports = router;
