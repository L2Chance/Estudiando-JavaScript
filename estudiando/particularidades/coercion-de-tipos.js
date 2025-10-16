/*JavaScript suele convertir tipos para poder operarlos u compararlos. Lo ideal para evitar problemas es utilizar comparadores estrictos "===" - "!=="*/

// SUMA (Con Strings)
//Si al menos uno de los operandos es un string, el otro operando (sea cual sea su tipo) se convertirá también a string, y 
//el resultado será una concatenación de cadenas.

//Da 22
console.log(2 + "2")

//Da 34
console.log("3" + 4)

//Da 73
console.log(4 + 3 + "3")

// SUMA (Sin Strings)
//Si ninguno de los operandos es un string, ambos se convierten a Number 
//y se realiza una suma matemática.

//Da 3
console.log(2 + true)

//Da 3
console.log(3 + false)

//Da 5
console.log(4 + true + false)

// Operadores Matemáticos (Excepto Suma)
//Para la resta (-), multiplicación (*), división (/), y el resto (%), JavaScript asume que se intenta realizar una operación matemática. 
//Por lo tanto, ambos operandos se convierten implícitamente al tipo Number.

//Da 5
console.log("10" - 5)

//Da 3
console.log(6 - "3")

//Da 9
console.log(4 * 3 - "3")

// Operadores de Comparación
//Doble Igualdad (==) - Coercitiva: Intenta convertir los operandos a un tipo común antes de comparar.

1 == "1"   // Resultado: true (El "1" se convierte a 1)
0 == false // Resultado: true (false se convierte a 0)

//Triple Igualdad (===) - Estricta: NO realiza coerción. Compara el valor y el tipo de dato. Es la forma recomendada de comparación.

1 === "1"   // Resultado: false (Tipos diferentes: Number vs String)
0 === false // Resultado: false (Tipos diferentes: Number vs Boolean)