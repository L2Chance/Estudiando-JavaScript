const challengeController = require("../controller/challengeController");
const express = require("express");
const router = express.Router();

router.get("/", challengeController.getChallenges);
router.post("/", challengeController.createChallenge);
router.post("/attemp", challengeController.createChallengeAttemp);

module.exports = router;
