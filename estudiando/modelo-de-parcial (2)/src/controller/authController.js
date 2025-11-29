const jwt = require("jsonwebtoken");

async function generarTokenAuth(req, res) {
  try {
    const token = jwt.sign({}, "ggfddthjuj64544d#%JI$#%#$gergdergdf");
    return res.json({ token });
  } catch (error) {
    next(error);
  }
}

module.exports = { generarTokenAuth };
