const UserSchema = require("../model/UserSchema");
const bcrypt = require("bcrypt");

const signup = async (req, resp) => {
  UserSchema.findOne({ username: req.body.username })
    .then((result) => {
      if (result == null) {
        bcrypt.hash(req.body.password, 10, function (err, hash) {
          if (err) {
            return resp.status(500).json({ message: "something went wrong!" });
          }
          const user = new UserSchema({
            username: req.body.username,
            fullName: req.body.fullName,
            password: hash,
          });
          user
            .save()
            .then((savedData) => {
              resp.status(201).json({ message: "user was saved!" });
            })
            .catch((error) => {
              resp.status(500).json(error);
            });
        });
      } else {
        resp.status(409).json({ message: "username already exists!" });
      }
    })
    .catch((error) => {
      resp.status(500).json(error);
    });
};

const login = async (req, resp) => {};

module.exports = {
  signup,
  login,
};
