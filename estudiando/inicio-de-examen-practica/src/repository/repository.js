const fs = require("fs/promises");
const path = require("path");
const FILE_PATH = path.join(__dirname, "../archivoJson.json");

async function readJsonFile() {
  try {
    const data = await fs.readFile(FILE_PATH, "utf8");
    return JSON.parse(data);
  } catch (error) {
    Console.log(error);
  }
  return { entidad1: [], entidad2: [], entidad3: [] };
}

async function writeJsonFile(Json) {
  await fs.writeFile(FILE_PATH, JSON.stringify(Json), null, 2, "utf8");
}

module.exports = { readJsonFile, writeJsonFile };
