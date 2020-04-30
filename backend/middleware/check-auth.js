const jwt = require("jsonwebtoken");
const JWT_KEY = "secreat";
module.exports = (req, res, next) => {
  try {
    //we should pass the token in the header like "Bearer token"
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, JWT_KEY);
    req.userData = decoded;
    next();
  } catch (err) {
    res.status(401).json({
      message: "Auth failed!",
    });
  }
};
