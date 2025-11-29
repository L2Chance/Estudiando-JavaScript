const challengeService = require("../service/challengesService");

async function getChallenges(req, res, next) {
  try {
    const todosLosDesafios = await challengeService.getChallenges(req.query);
    res.status(200).json(todosLosDesafios);
  } catch (error) {
    next(error);
  }
}

async function createChallenge(req, res, next) {
  try {
    const desafioCreado = challengeService.createChallenge(req.body);
    res.status(201).json(desafioCreado);
  } catch (error) {
    next(error);
  }
}

async function createChallengeAttemp(req, res, next) {
  try {
    const IntentoDeDesafioCreado = challengeService.createChallengeAttemp(
      req.body
    );
    res.status(201).json(IntentoDeDesafioCreado);
  } catch (error) {
    next(error);
  }
}

module.exports = { getChallenges, createChallenge, createChallengeAttemp };
