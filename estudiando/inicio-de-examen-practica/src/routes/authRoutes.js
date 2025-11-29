const express = require("express");
const router = express.Router();
const authController = require("../controller/authController");
const middleware = require("../middleware/middleware");

router.get("/token", middleware.logMiddleware, authController.authController);

module.exports = router;
