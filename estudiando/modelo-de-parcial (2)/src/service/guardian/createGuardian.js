const {
  readGameFile,
  writeGameFile,
} = require("../../repository/gameRepository");
const utils = require("../../utils/utils");

async function createGuardian(data) {
  const db = await readGameFile();

  const nextId = utils.getNextId(db.guardians);

  const newGuardian = {
    id: nextId,
    name: data.name,
    level: 1,
    xp: 0,
    energy: 100,
    skills: data.skills || [],
    items: data.items || [],
  };

  db.guardians.push(newGuardian);

  await writeGameFile(db);

  return newGuardian;
}

module.exports = createGuardian;
