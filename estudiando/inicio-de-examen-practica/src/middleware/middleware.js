const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

function authMiddleware(req, res, next) {
  const headersAuth = req.headers.authorization;

  if (!headersAuth) {
    return res.status(400).json({ error: "Sin autorización" });
  }

  const token = headersAuth.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.CLAVE_TOKEN);
    req.user = decoded;
  } catch (error) {
    return res.status(403).json({ error: "Token invalido o expirado" });
  }

  next();
}

function logMiddleware(req, res, next) {
  const fecha = new Date();

  res.on("finish", () => {
    console.log(
      `[${fecha}] - [${req.method}] - [${req.url}] - [${res.statusCode}]`
    );
  });

  next();
}

module.exports = { authMiddleware, logMiddleware };
