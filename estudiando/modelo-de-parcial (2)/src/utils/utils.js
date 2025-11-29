const math = require("mathjs");

function getNextId(entity) {
  if (entity.length === 0) {
    return 1;
  } else {
    return entity[entity.length - 1].id + 1;
  }
}

function calcularExperiencia(formula, variables) {
  const resultado = math.evaluate(formula, variables);
  return resultado;
}

function calcularSubidaDeNivel(guardian) {
  while (guardian.xp >= guardian.level * 75) {
    guardian.xp = guardian.xp - guardian.level * 75;
    guardian.level = guardian.level + 1;
  }
  return guardian;
}

module.exports = { getNextId, calcularExperiencia, calcularSubidaDeNivel };
