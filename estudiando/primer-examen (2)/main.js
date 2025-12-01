const fetchApi = require("./fetch");
const PublicacionService = require("./PublicacionService");
const UsuarioService = require("./UsuarioService");
const CruzaService = require("./CruzaService");

async function main() {
  // usuarios y publicaciones son 2 array de objetos, uno con los usuarios y otro con las publicaciones.
  const usuarios = await fetchApi("https://jsonplaceholder.typicode.com/users");
  const publicaciones = await fetchApi(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const usuarioService = new UsuarioService(usuarios);
  const publicacionService = new PublicacionService(publicaciones);
  const cruzaService = new CruzaService(publicaciones, usuarios);

  cruzaService.encontrarUsuariosSinPublicaciones();
}

main();
