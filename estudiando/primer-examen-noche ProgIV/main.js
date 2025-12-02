const fetchApi = require("./fetch");
const UsuarioService = require("./UsuarioService");

async function main() {
  const usuarios = await fetchApi("https://jsonplaceholder.typicode.com/users");
  const comentarios = await fetchApi(
    "https://jsonplaceholder.typicode.com/comments"
  );
  const albums = await fetchApi("https://jsonplaceholder.typicode.com/albums");

  const usuarioService = new UsuarioService(usuarios);

  usuarioService.verCompaniaConMasUsuariosAsociados();
}

main();
