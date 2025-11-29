const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

async function authController(req, res, next) {
  try {
    const token = jwt.sign({}, process.env.CLAVE_TOKEN);
    return res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
}

module.exports = { authController };
