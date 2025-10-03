/*Escribe una función asíncrona obtenerDatosEnParalelo que reciba una lista de URLs de una API. La función debe hacer peticiones a todas las URLs 
al mismo tiempo y devolver un array con los resultados de cada petición. Si alguna petición falla, la función debe manejar el error y no detener 
el resto de las peticiones.

Ejemplo: Podrías usar URLs de prueba como:

https://jsonplaceholder.typicode.com/todos/1

https://jsonplaceholder.typicode.com/posts/1

Pista: Investiga sobre el método Promise.allSettled().*/ 