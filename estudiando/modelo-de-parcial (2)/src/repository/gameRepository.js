const fs = require("fs/promises");
const path = require("path");
const FILE_PATH = path.join(__dirname, "../game.json");

async function readGameFile() {
  try {
    const data = await fs.readFile(FILE_PATH, "utf8");
    return JSON.parse(data);
  } catch (error) {}
  return { guardians: [], challenges: [], duels: [] };
}

async function writeGameFile(jsonData) {
  await fs.writeFile(FILE_PATH, JSON.stringify(jsonData), null, 2, "utf8");
}

module.exports = {
  readGameFile,
  writeGameFile,
};
