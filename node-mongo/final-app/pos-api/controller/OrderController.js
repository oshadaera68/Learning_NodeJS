const orderSchema = require("../model/OrderSchema");

const create = (req, resp) => {
  const order = new orderSchema({
    date: req.body.date,
    customerDetail: req.body.customerDetail,
    totalCost: req.body.totalCost,
    products: req.body.products,
  });
  order
    .save()
    .then((response) => {
      return response.status(201).json({ message: "order saved" });
    })
    .catch((error) => {
      return response.status(500).json(error);
    });
};

const findById = (req, resp) => {
  orderSchema.findOne({ _id: req.params.id }).then((selectedObj) => {
    if (selectedObj !== null) {
      return resp.status(200).json({ data: selectedObj });
    }
    return resp.status(404).json({ message: "order not found" });
  });
};
const update = async (req, resp) => {
  const deleteData = await orderSchema.findOneAndDelete({
    _id: req.params.id,
  });

  if (deleteData) {
    return resp.status(204).json({ message: "deleted" });
  } else {
    return resp.status(500).json({ message: "internal server error" });
  }
};

const deleteById = async (req, resp) => {
  const deleteData = await orderSchema.findOneAndDelete({
    _id: req.params.id,
  });

  if (deleteData) {
    return resp.status(204).json({ message: "deleted" });
  } else {
    return resp.status(500).json({ message: "internal server error" });
  }
};

const findAll = (req, resp) => {};

module.exports = {
  create,
  findById,
  update,
  deleteById,
  findAll,
};
