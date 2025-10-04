/*Crea una función asíncrona llamada simularRetardoAleatorio que:

Devuelva una promesa que se resuelva después de un tiempo aleatorio entre 500 y 3000 milisegundos. El valor resuelto debe ser el número de milisegundos que 
tardó.

Crea otra función asíncrona ejecutarVariosRetardos que llame a simularRetardoAleatorio cinco veces en paralelo usando Promise.all().

ejecutarVariosRetardos debe mostrar por consola el tiempo que tardó cada llamada individual y el tiempo total que tardaron todas en completarse.*/