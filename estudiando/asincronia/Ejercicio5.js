/*Crea una función asíncrona llamada obtenerUsuarioYPosts. La función debe:

Hacer una petición a https://jsonplaceholder.typicode.com/users/1 para obtener los datos de un usuario.

Una vez que obtengas el id de ese usuario, haz una segunda petición a https://jsonplaceholder.typicode.com/posts?userId=X (sustituyendo X por el id del usuario) 
para obtener sus publicaciones.

La función debe devolver un objeto que contenga los datos del usuario y sus publicaciones.

Maneja los errores con un try/catch. Si alguna de las peticiones falla, el programa debe detenerse y mostrar un mensaje de error claro.*/

async function obtenerUsuariosYPosts(){
    url = "https://jsonplaceholder.typicode.com/users/1"
    const promesaDeUsuario = fetch(url).then(response => {
        if (!response.ok){
            throw new Error("Ha sucedido un problema con la petición de la url:", url , response.statusText);
        }
        else{
            return response.json();
        }
    })

    const usuario = await promesaDeUsuario;

    const url2 = "https://jsonplaceholder.typicode.com/posts?userId=1"

    const promesaDePublicaciones = fetch(url2).then(response => {
        if (!response.ok){
            throw new Error("Ha sucedido un problema con la petición de la url:", url , response.statusText);
        }
        else{
            return response.json();
        }
    })

    const publicaciones = await promesaDePublicaciones;

    return {usuario, publicaciones}

}

async function llamarFuncion(){
    try {
        const resultadoFinal = await obtenerUsuariosYPosts();
        console.log(resultadoFinal)
    } catch (error) {
        console.error(error)
    }
}

llamarFuncion();