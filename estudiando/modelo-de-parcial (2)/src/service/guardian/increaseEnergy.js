const {
  readGameFile,
  writeGameFile,
} = require("../../repository/gameRepository");

async function changeEnergy(guardianId, energy) {
  const db = await readGameFile();
  const guardianEncontrado = db.guardians.find((g) => g.id === guardianId);

  if (!guardianEncontrado) {
    return console.error("El guardian no ha sido encontrado");
  }

  let nuevaEnergia = guardianEncontrado.energy + energy;

  if (nuevaEnergia > 100) {
    nuevaEnergia = 100;
  } else {
    if (nuevaEnergia < 0) {
      nuevaEnergia = 0;
    }
  }

  guardianEncontrado.energy = nuevaEnergia;

  writeGameFile(db);

  return guardianEncontrado;
}

module.exports = changeEnergy;
