const { expDependencies } = require("mathjs");
const {
  writeGameFile,
  readGameFile,
} = require("../../repository/gameRepository");
const utils = require("../../utils/utils");

async function createChallengeAttemp(body) {
  const db = await readGameFile();
  const guardian = db.guardians.find((g) => g.id === body.guardianId);
  const challenge = db.challenges.find((c) => c.id === body.challengeId);
  let challengestatus = "";
  let penalizacion = 0;
  let experienciaGanada = 0;

  if (guardian.energy < challenge.energyCost) {
    throw new Error(
      "El guardian no tiene suficiente energía para realizar este desafio"
    );
  }

  console.log(challenge.requiredSkill);

  if (!guardian.skills.includes(challenge.requiredSkill)) {
    throw new Error(
      "El guardian no tiene la habilidad requerida para este desafio"
    );
  }

  //CASO DE FALLO

  if (challenge.difficulty > guardian.level * 2) {
    challengestatus = "failed";
    penalizacion = challenge.difficulty * 3;

    let restaEnergiaTotal = challenge.energyCost + penalizacion;

    if (restaEnergiaTotal > guardian.energy) {
      guardian.energy = 0;
    } else {
      guardian.energy = guardian.energy - restaEnergiaTotal;
    }
    //CASO DE EXITO
  } else {
    challengestatus = "success";
    guardian.energy = guardian.energy - challenge.energyCost;
    experienciaGanada = utils.calcularExperiencia(challenge.rewardFormula, {
      difficulty: challenge.difficulty,
      energyCost: challenge.energyCost,
    });
    guardian.xp = guardian.xp + experienciaGanada;
    utils.calcularSubidaDeNivel(guardian);
  }

  const nuevoIntentoDesafio = {
    challengeId: body.challengeId,
    guardianId: body.guardianId,
    experienciaGanada: experienciaGanada,
    status: challengestatus,
  };

  if (!db.challengesAttemps) {
    db.challengesAttemps = [];
  }

  db.challengesAttemps.push(nuevoIntentoDesafio);

  await writeGameFile(db);

  return nuevoIntentoDesafio;
}

module.exports = createChallengeAttemp;
