/*En JavaScript las declaraciones de variables con "var" se elevan al tope del código en momento de su ejecución. Es decir, esa variable existirá incluso si está 
declarada luego de usarla. Sin embargo, su inicialización no se eleva, solo su declaración.*/


//Este código da "undefined", porque la variable existe pero no su valor.
console.log(num);
var num = 10;

//Let y Const también se elevan, pero a una zona denominada "zona muerta" que devuelve un error si intentas acceder a ella. Esto se hizo para que
//JavaScript fuera mas predecible.

//Este código da error de ejecución.
console.log(num2)
let num2 = 15;

//Este código da error de ejecución.
console.log(num3)
const num3 = 20;

