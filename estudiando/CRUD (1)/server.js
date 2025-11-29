const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  console.log("Hola mundillo");
});

app.listen(PORT, () => {
  console.log("El servidor se ha levantado correctamente");
  console.log("http://localhost:3000");
});
