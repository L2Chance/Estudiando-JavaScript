/*Una consultora de software necesita analizar datos de una red social ficticia.
Los datos provienen de la API pública JSONPlaceholder:

Usuarios: https://jsonplaceholder.typicode.com/users

Publicaciones: https://jsonplaceholder.typicode.com/posts

Tu tarea será diseñar y programar un sistema en JavaScript que permita trabajar con esta información de forma eficiente y lógica.

Problemática
Usuarios

- Se necesita poder identificar y trabajar con los usuarios registrados en la plataforma. xx
- Se debe poder buscar usuarios según distintos criterios (por ejemplo, correo electrónico o ciudad). xx
- La empresa quiere detectar si hay usuarios duplicados en base a su email o nombre de usuario. xx
- También requieren un análisis que indique qué ciudad tiene más usuarios registrados. xx

Publicaciones

- Cada publicación pertenece a un usuario. xx
- Se debe poder listar todas las publicaciones de un usuario. xx
- La empresa quiere detectar qué usuarios publican más contenido y obtener un ranking con los primeros 5. xx
- También necesitan una función que encuentre todas las publicaciones que contengan una determinada palabra clave en el título o en el contenido. xx


*** La empresa quiere un análisis que permita cruzar información:

- Encontrar si existen usuarios que no tengan ninguna publicación. xx 
- Detectar cuál es la proporción de publicaciones por usuario en relación al total de publicaciones (ejemplo: “El usuario X genera el 12% del total de publicaciones”).xx
- Generar un informe con la ciudad cuyos usuarios, en promedio, publican más contenido. 

**Condiciones adicionales**

- El sistema debe ser robusto: manejar errores de red y validar los datos recibidos de la API.
- El código debe aplicar conceptos vistos en clase: asincronía, manejo de errores, prototipos, closures, coerción, timers/event loop y organización modular.

**Condiciones adicionales**

- El sistema debe manejar asincronía (fetch, async/await) y errores de red.
- Se deben validar los datos recibidos: si falta información crítica en un usuario, comentario o álbum, debe considerarse inválido.
- El proyecto debe aplicar conceptos como prototipos, closures, coerción, timers/event loop y organización modular.*/

import { ApiFunction } from "./api-functions.js";
import { UsuarioService } from "./usuario-service.js";
import { PublicacionService } from "./publicacion-service.js";

async function main(){
    const apiUsuarios = new ApiFunction("https://jsonplaceholder.typicode.com/users");
    const apiPublicaciones = new ApiFunction("https://jsonplaceholder.typicode.com/posts")
    const resApiUsuarios = await apiUsuarios.comprobarEstado()
    const resApiPublicaciones = await apiPublicaciones.comprobarEstado()
    const usuarioService = new UsuarioService(resApiUsuarios);
    const publicacionService = new PublicacionService(resApiPublicaciones); 

    publicacionService.verCiudadConMayorActividadEnPromedio(resApiUsuarios);

}

main();