const Customer = require("../model/CustomerSchema");
/* POST(Save), PUT(Update), GET(Fetch), DELETE(Remove) */

const saveCustomer = (req, resp) => {
  const tempCustomer = new Customer({
    nic: req.body.nic,
    name: req.body.name,
    address: req.body.address,
    salary: req.body.salary,
  });
  tempCustomer
    .save()
    .then((result) => {
      resp.status(201).json({ status: true, message: "customer was saved!" });
    })
    .catch((error) => {
      resp.status(500).json(error);
    });
};

const findCustomer = (req, resp) => {
  Customer.findOne({ nic: req.headers.nic })
    .then((result) => {
      if (result == null) {
        resp
          .status(404)
          .json({ status: false, message: "customer not found!" });
      } else {
        resp.status(200).json({ status: true, data: result });
      }
    })
    .catch((error) => {
      resp.status(500).json(error);
    });
};

const updateCustomer = (req, resp) => {
  Customer.updateOne({ nic: req.headers.nic },{
      $set: {
        name: req.body.name,
        address: req.body.address,
        salary: req.body.salary
      }
    }
  )
    .then((result) => {
      if (result.nModified>0) {
        resp
          .status(201)
          .json({ status: true, message: "customer updated!" });
      } else {
        resp.status(200).json({ status: false, message:'try again' });
      }
    })
    .catch((error) => {
      resp.status(500).json(error);
    });
};
const deleteCustomer = (req, resp) => {};
const findAllCustomer = (req, resp) => {};
