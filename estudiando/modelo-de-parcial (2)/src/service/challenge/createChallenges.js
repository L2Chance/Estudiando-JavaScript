const repository = require("../../repository/gameRepository");
const utils = require("../../utils/utils");

async function createChallenge(data) {
  const db = await repository.readGameFile();

  const newChallenge = {
    id: utils.getNextId(db.challenges),
    title: data.title,
    difficulty: data.difficulty,
    energyCost: data.energyCost,
    rewardFormula: data.rewardFormula,
    requiredSkill: data.requiredSkill,
  };

  db.challenges.push(newChallenge);

  await repository.writeGameFile(db);

  return newChallenge;
}

module.exports = createChallenge;
