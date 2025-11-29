const repository = require("../../repository/gameRepository");

async function getChallenges(filters = {}) {
  try {
    const data = await repository.readGameFile();
    let challenges = data.challenges;

    if (filters.difficulty !== undefined) {
      challenges = challenges.filter(
        (d) => (d.difficulty = filters.difficulty)
      );
    }

    if (filters.title) {
      challenges = challenges.filter((d) =>
        d.title.toLowerCase().includes(filters.title.toLowerCase())
      );
    }

    return challenges;
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = getChallenges;
