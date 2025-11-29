const express = require('express');
const usuarioController = require("./controller/usuarioController")
const app = express();
const port = 3000;

usuarioController(app)

app.listen(port, (req, res) => {
    console.log("servidor activo");
    console.log(`http://localhost:${port}`)
})

