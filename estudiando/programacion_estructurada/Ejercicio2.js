/*Escribe una función llamada contarPalabras que reciba una cadena de texto (string). La función debe devolver un objeto donde cada 
clave sea una palabra única de la cadena y el valor sea el número de veces que esa palabra aparece. Ignora mayúsculas y minúsculas y 
cualquier signo de puntuación.*/


function contarPalabras(texto){
    let arrayPalabras = texto.toLowerCase().split(" ");
    let palabraConteo = 0;

    objeto = {}

    arrayPalabras.forEach(palabra => {

        if (objeto[palabra]) {
            objeto[palabra]++;
        } else {
            objeto[palabra] = 1;
        }
    });

    return(objeto);
}

console.log(contarPalabras("No veo televisión veo Veo JUAN PEREZ JUAN"));
