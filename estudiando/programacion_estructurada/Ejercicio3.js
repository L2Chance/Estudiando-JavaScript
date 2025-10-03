/*Suma de elementos en un array de arrays
Escribe una función llamada sumarArrays que reciba un array que contiene otros arrays de números. La función debe devolver la suma total de 
todos los números en todos los arrays.

Ejemplo: sumarArrays([[1, 2], [3, 4, 5], [6]]) debería devolver 21.

Pista: Necesitarás usar un bucle anidado o el método reduce() de forma anidada para resolver esto de manera eficiente.*/ 

function sumarArrays(array){
    let acumuladorGeneral = 0;
    array.forEach(element => {
        sumaElementos = element.reduce(function(acumulador, valorActual){
            return acumulador + valorActual;
        }, 0)
        acumuladorGeneral = acumuladorGeneral + sumaElementos;
    });

    console.log("Suma de todos los elementos: ", acumuladorGeneral)
}

let superArray = [[10,20,30],[30,70,20],[112,343,23]]

sumarArrays(superArray)