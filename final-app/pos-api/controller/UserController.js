const userSchema = require('../model/UserSchema');
const bcrypt = require('bcrypt');
const salt = 10;

const register = (req, resp) => {
    bcrypt.hash(req.body.password, salt, function (err, hash) {
        if (err) {
            resp.status(500).json(err);
        }
        const user = new userSchema({
            fullname: req.body.fullName, email: req.body.email, password: hash, activeState: req.body.activeState,
        });
        user.save().then(saveResponse => {
            resp.status(201).json({'message': 'Saved!'});
        }).catch(error => {
            resp.status(500).json(error);
        })
    })
}

const login = (req, resp) => {

}

module.exports = {
    register, login
}