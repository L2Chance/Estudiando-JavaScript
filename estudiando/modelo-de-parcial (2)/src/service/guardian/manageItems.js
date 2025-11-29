const {
  readGameFile,
  writeGameFile,
} = require("../../repository/gameRepository");

async function manageItems(guardianId, body) {
  const db = await readGameFile();

  const guardianEncontrado = db.guardians.find((g) => g.id === guardianId);

  if (body.action === "add") {
    guardianEncontrado.items.push(body.item);
  } else {
    if (body.action === "delete") {
      guardianEncontrado.items = guardianEncontrado.items.filter(
        (i) => i.name !== body.itemName
      );
    } else {
      throw new Error("Accion invalida: 'add' o 'delete'");
    }
  }

  writeGameFile(db);

  return guardianEncontrado;
}

module.exports = manageItems;
