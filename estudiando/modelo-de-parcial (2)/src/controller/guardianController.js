const guardianService = require("../service/guardianService");

async function getGuardians(req, res, next) {
  try {
    const todosLosGuardianes = await guardianService.getGuardians(req.query);
    res.status(200).json(todosLosGuardianes);
  } catch (error) {
    next(error);
  }
}

async function createGuardian(req, res, next) {
  try {
    const guardian = await guardianService.createGuardian(req.body);
    res.status(201).json(guardian);
  } catch (error) {
    next(error);
  }
}

async function increaseEnergy(req, res, next) {
  try {
    const guardianModificado = await guardianService.increaseEnergy(
      Number(req.params.id),
      req.body.energy
    );
    res.status(200).json(guardianModificado);
  } catch (error) {
    next(error);
  }
}

async function manageItems(req, res, next) {
  try {
    const guardianModificado = await guardianService.manageItems(
      Number(req.params.id),
      req.body
    );
    res.status(200).json(guardianModificado);
  } catch (error) {
    next(error);
  }
}

module.exports = { createGuardian, getGuardians, increaseEnergy, manageItems };
