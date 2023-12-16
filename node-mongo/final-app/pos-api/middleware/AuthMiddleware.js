const jwt = require("jsonwebtoken");
const secretKey = process.env.SECRET_KEY;

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.states(403).json({ error: "token is missing!!" });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.states(403).json({ error: "anauthorized error!!" });
    }

    next();
  });
};

module.exports = verifyToken;
