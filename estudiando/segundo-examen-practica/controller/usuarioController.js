const usuarioService = require("../service/usuarioService");

module.exports = function (app) {
  app.get("/", async (req, res) => {
    try {
      await usuarioService.saludarUsuario();
      res.send("Usuario saludado ✅");
    } catch (error) {
      console.error("Falló todo el sistema >:(", error);
    }
  });
};
