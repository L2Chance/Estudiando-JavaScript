const Router = require("express");
const authController = require("../controller/authController");

const router = Router();

router.get("/token", authController.generarTokenAuth);

module.exports = router;
