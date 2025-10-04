/*Escribe una función asíncrona obtenerDatosEnParalelo que reciba una lista de URLs de una API. La función debe hacer peticiones a todas las URLs 
al mismo tiempo y devolver un array con los resultados de cada petición. Si alguna petición falla, la función debe manejar el error y no detener 
el resto de las peticiones.

Ejemplo: Podrías usar URLs de prueba como:

https://jsonplaceholder.typicode.com/todos/1

https://jsonplaceholder.typicode.com/posts/1

Pista: Investiga sobre el método Promise.allSettled().*/ 

async function obtenerDatosEnParalelo(urls){
  const arrayDeFetchs = urls.map(url => {
    return fetch(url).then(response => {
      if (!response.ok){
        throw new Error(`Problemas con la url ${url} : ${response.statusText}`);
      }
      else{
        return response.json();
      }
    }).catch(error => {
      console.error("|Ha habido un problema con una petición|", error);
      return {error: error.message}
    })
  })

  const promesasResueltas = await Promise.allSettled(arrayDeFetchs); 

  const resultadoFinal = promesasResueltas.map(promesa => {
    if (promesa.status == "fulfilled"){
      return promesa.value
    }
    else{
      console.log("Ha sucedido un problema")
      return {}
    }
  })

  return resultadoFinal

}

const urlsDePrueba = [
  'https://jsonplaceholder.typicode.com/todos/1',
  'https://jsonplaceholder.typicode.com/todos/2',
  'https://jsonplaceholder.typicode.com/invalid-url-que-falla' // URL que fallará
];

obtenerDatosEnParalelo(urlsDePrueba).then(resultado => {
  console.log(resultado);
}).catch(error => {
  console.log("Ha sucedido un error en el proceso", error);
}).finally(() => {
  console.log("El proceso ha finalizado")
})


