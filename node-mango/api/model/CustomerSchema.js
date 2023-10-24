const mongoose = require("mongoose");
const CustomerSchema = new mongoose.Schema({
  nic: { type: String, required: true },
  name: { type: String, required: true },
  addess: { type: String, required: true },
  salary: { type: Number, required: true },
});

module.exports = mongoose.model("Customer", CustomerSchema);
