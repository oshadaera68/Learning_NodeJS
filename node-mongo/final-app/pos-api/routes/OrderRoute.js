const express = require("express");
const orderController = require("../controller/OrderController");
const verifyUser = require("../middleware/AuthMiddleware");
const router = express.Router();

router.post("/create", verifyUser, orderController.create);
router.get("/find-by-id", verifyUser, orderController.findById);
router.delete("/delete-by-id", verifyUser, orderController.deleteById);
router.put("/update", verifyUser, orderController.update);
router.get("/find-all", verifyUser, orderController.findAll);

module.exports = router;
