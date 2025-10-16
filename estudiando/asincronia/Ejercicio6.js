/*Crea una función asíncrona llamada carreraDePromesas que reciba una lista de URLs de API. La función debe:

Hacer peticiones a todas las URLs al mismo tiempo.

Devolver el resultado de la primera petición que se complete, sin importar si es exitosa o si falla.

La función debe manejar el caso de error de la promesa "ganadora" con un try/catch.

Pista: Investiga sobre el método Promise.race(). Puedes usar URLs de prueba como las de la API de JSONPlaceholder.*/

async function carreraDePromesas(urls){
    const peticiones = urls.map(url => {
        return fetch(url).then(response => {
            if (response.ok){
                return response.json();
            }
            else{
                throw new Error("Ha sucedido un error", response.statusText); 
            }
        })
    })

    return Promise.race(peticiones)
}

const urlsDePrueba = [
  'https://jsonplaceholder.typicode.com/invalid-url-que-falla',
  'https://jsonplaceholder.typicode.com/todos/1',
  'https://jsonplaceholder.typicode.com/todos/2',
];

async function llamarAPromesaGanadora(){
    try {
        const promesaGanadora = await carreraDePromesas(urlsDePrueba);
        console.log("Promesa ganadores: ", promesaGanadora)
    } catch (error) {
        console.error("Ha sucedido un error: ", error)
    }
}

llamarAPromesaGanadora()