const productSchema = require("../model/ProductSchema");

const create = (req, resp) => {
  const product = new productSchema({
    name: req.body.name,
    description: req.body.description,
    image: req.body.image,
    unitPrice: req.body.unitPrice,
    qtyOnHand: req.body.qtyOnHand,
  });
  product
    .save()
    .then((response) => {
      return resp.status(201).json({ message: "product saved" });
    })
    .catch((error) => {
      return resp.status(500).json(error);
    });
};

const findById = (req, resp) => {
  productSchema.findOne({ _id: req.params.id }).then((selectedObj) => {
    if (selectedObj !== null) {
      return resp.status(200).json({ data: selectedObj });
    }
    return resp.status(404).json({ message: "product not found" });
  });
};

const update = async (req, resp) => {
  const deleteData = await productSchema.findOneAndDelete({
    _id: req.params.id,
  });

  if (deleteData) {
    return resp.status(204).json({ message: "deleted" });
  } else {
    return resp.status(500).json({ message: "internal server error" });
  }
};

const deleteById = async (req, resp) => {
  const deleteData = await productSchema.findOneAndDelete({
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
