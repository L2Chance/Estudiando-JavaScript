/*Modifica la función del ejercicio anterior para que, en caso de que una de las peticiones falle, se lance una excepción y se detenga el proceso. 
El programa debe capturar este error y mostrar un mensaje claro en la consola, sin imprimir ningún dato.

Pista: Usa Promise.all() en lugar de Promise.allSettled().*/

async function obtenerDatosEnParalelo(urls){
  const arrayDeFetchs = urls.map(url => {
    return fetch(url).then(response => {
      if (!response.ok){
        throw new Error(`Problemas con la url ${url} : ${response.statusText}`);
      }
      else{
        return response.json();
      }
    })
  })

  const promesasResueltas = await Promise.all(arrayDeFetchs); 

  console.log(promesasResueltas)

  const resultadoFinal = promesasResueltas.map(promesa => {
      return promesa.value
  })

  return resultadoFinal

}

const urlsDePrueba = [
  'https://jsonplaceholder.typicode.com/invalid-url-que-falla',
  'https://jsonplaceholder.typicode.com/todos/1',
  'https://jsonplaceholder.typicode.com/todos/2',
];

obtenerDatosEnParalelo(urlsDePrueba).then(resultado => {
  console.log(resultado);
}).catch(error => {
  console.log("Ha sucedido un error en el proceso", error);
}).finally(() => {
  console.log("El proceso ha finalizado")
})
