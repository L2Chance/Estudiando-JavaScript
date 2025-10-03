/*Crea un archivo llamado ejercicio1.js. En él, define un array de números. Utiliza un bucle for o forEach para recorrer el array y 
mostrar en la consola solo los números pares.

Preguntas para investigar:

¿Cuál es la diferencia de rendimiento entre for y forEach en JavaScript?

¿Qué son los métodos map, filter y reduce, y cómo podrías usar filter para resolver este ejercicio de una forma más "funcional"?*/ 

let numeros = [0,20,30,40,50, 19,32];

numeros.forEach(numero => {
    if(numero % 2 === 0){
        console.log(numero);
    }
});

/*Forma más funcional de resvolver:*/

let numerosPares = numeros.filter(numero => numero % 2 == 0);

console.log(" ");

console.log(numerosPares)

/*A - En general, el bucle for suele ser más rápido que forEach debido a la sobrecarga de llamadas a funciones y a que forEach no puede ser 
interrumpido con break o continue. Sin embargo, forEach ofrece mayor legibilidad y un código más conciso para operaciones simples, sin necesidad 
de gestionar contadores o índices explícitamente.*/ 

/*B - map() transforma todos los elementos del array según una función y crea un nuevo array con esos elementos, filter() sirve para filtrar según una condición y 
reduce() se usa para reducir un array a un único valor, según una operación*/