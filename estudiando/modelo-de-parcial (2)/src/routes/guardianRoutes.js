const express = require("express");
const router = express.Router();
const guardianController = require("../controller/guardianController");
const middlewares = require("../middleware/middleware");

router.get(
  "/",
  middlewares.logMiddleware,
  middlewares.authMiddleware,
  guardianController.getGuardians
);
router.post("/", middlewares.authMiddleware, guardianController.createGuardian);
router.patch(
  "/:id/energy",
  middlewares.authMiddleware,
  guardianController.increaseEnergy
);
router.patch(
  "/:id/items",
  middlewares.authMiddleware,
  guardianController.manageItems
);

module.exports = router;
