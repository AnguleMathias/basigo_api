const JWT = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const token = req.header("Authorization");
  if (!token) return res.status(401).send("Access denied. Login required.");

  try {
    const verified = JWT.verify(token, process.env.TOKEN_SECRET_KEY);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send("Invalid User");
  }
};
