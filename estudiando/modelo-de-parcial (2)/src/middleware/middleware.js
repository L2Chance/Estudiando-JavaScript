const jwt = require("jsonwebtoken");

function logMiddleware(req, res, next) {
  const fechaHoy = new Date().toISOString();

  res.on("finish", () => {
    console.log(
      `[${fechaHoy}] - [${req.method}] - [${req.url}] - [${res.statusCode}]`
    );
  });

  next();
}

function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "Token requerido" });
  }

  const token = authHeader.split(" ")[1];

  try {
    jwt.verify(token, "ggfddthjuj64544d#%JI$#%#$gergdergdf");
  } catch (error) {
    return res.status(403).json({ error: "Token invalido o expirado" });
  }

  next();
}

function guardianValidation(req, res, next) {
  const { name, skills, items } = req.body;

  if (name === undefined || skills === undefined || items === undefined) {
    return res.status(400).json({
      error: "Los campos 'name', 'skills' e 'items' son obligatorios",
    });
  }

  if (typeof name != "string") {
    return res
      .status(400)
      .json({ error: "El campo 'name' debe ser un string" });
  }

  if (!Array.isArray(skills)) {
    return res
      .status(400)
      .json({ error: "El campo 'skills' debe ser un array" });
  }

  if (!Array.isArray(items)) {
    return res
      .status(400)
      .json({ error: "El campo 'items' debe ser un array" });
  }

  for (let item of items) {
    if (typeof item.name !== "string" || typeof item.power !== "number") {
      return res.status(400).json({
        error: "Los items deben tener la forma {name: string, power: 10}",
      });
    }
  }

  next();
}

function challengeValidator(req, res, next) {
  const { title, difficulty, energyCost, rewardFormula, requiredSkill } =
    req.body;

  if (
    title === undefined ||
    difficulty === undefined ||
    energyCost === undefined ||
    rewardFormula === undefined ||
    requiredSkill === undefined
  ) {
    return res.status(400).json({
      error: "Alguno de los datos enviados al backend es undefined",
    });
  }

  if (
    typeof title !== "string" ||
    typeof difficulty !== "number" ||
    typeof requiredSkill !== "string" ||
    typeof energyCost !== "number" ||
    typeof rewardFormula !== "string"
  ) {
    return res.status(400).json({
      error:
        "Los datos enviados al backend no son del tipo correcto. {name: string, requiredSkills: string, energyCost: number, rewardFormula: string",
    });
  }

  if (difficulty > 10 || difficulty <= 0) {
    return res
      .status(400)
      .json({ error: "El valor de dificultad no es valido." });
  }

  if (energyCost > 100 || energyCost < 0) {
    return res
      .status(400)
      .json({ error: "El valor de costo de energía no es valido." });
  }

  next();
}

module.exports = {
  authMiddleware,
  guardianValidation,
  challengeValidator,
  logMiddleware,
};
