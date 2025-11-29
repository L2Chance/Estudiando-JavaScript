const {
  readGameFile,
  writeGameFile,
} = require("../../repository/gameRepository");

async function getGuardians(filters = {}) {
  try {
    const data = await readGameFile();
    let guardianes = data.guardians;

    if (filters.skill) {
      guardianes = guardianes.filter((g) => g.skills.includes(filters.skill));
    }

    if (filters.minLevel !== undefined) {
      guardianes = guardianes.filter((g) => g.level >= filters.minLevel);
    }

    if (filters.maxLevel !== undefined) {
      guardianes = guardianes.filter((g) => g.level <= filters.maxLevel);
    }

    if (filters.name) {
      guardianes = guardianes.filter((g) =>
        g.name.toLowerCase().includes(filters.name.toLowerCase())
      );
    }

    return guardianes;
  } catch (error) {
    throw new Error("No se pudieron listar los guardianes");
  }
}

module.exports = getGuardians;
