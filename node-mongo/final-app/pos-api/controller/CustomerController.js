const customerSchema = require("../model/CustomerSchema");

const create = (req, resp) => {
  const customer = new customerSchema({
    name: req.body.name,
    address: req.body.address,
    salary: req.body.salary,
  });
  customer
    .save()
    .then((response) => {
      return resp.status(201).json({ message: "customer saved" });
    })
    .catch((error) => {
      return resp.status(500).json(error);
    });
};

const findById = (req, resp) => {
  customerSchema.findOne({ _id: req.params.id }).then((selectedObj) => {
    if (selectedObj !== null) {
      return resp.status(200).json({ data: selectedObj });
    }
    return resp.status(404).json({ message: "customer not found" });
  });
};

const update = async (req, resp) => {
  const updateData = await customerSchema.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        name: req.body.name,
        address: req.body.address,
        salary: req.body.salary,
      },
    },
    { new: true }
  );

  if (updateData) {
    return resp.status(200).json({ message: "updated" });
  } else {
    return resp.status(500).json({ message: "internal server error" });
  }
};

const deleteById = async (req, resp) => {
  const deleteData = await customerSchema.findOneAndDelete({
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
