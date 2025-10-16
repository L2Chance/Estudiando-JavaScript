/*Crea una función asíncrona llamada simularRetardoAleatorio que:

Devuelva una promesa que se resuelva después de un tiempo aleatorio entre 500 y 3000 milisegundos. El valor resuelto debe ser el número de milisegundos que 
tardó.

Crea otra función asíncrona ejecutarVariosRetardos que llame a simularRetardoAleatorio cinco veces en paralelo usando Promise.all().

ejecutarVariosRetardos debe mostrar por consola el tiempo que tardó cada llamada individual y el tiempo total que tardaron todas en completarse.*/

async function simularRetardoAleatorio(){
    const promesa = new Promise((resolve) =>{
        const limite = generarNumeroAleatorio(500,3000)
        setTimeout(() => {
            resolve(limite);
        }, limite)
    })

    return promesa
}

function generarNumeroAleatorio(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max - min + 1) + min);
}

async function ejecutarVariosRetardos(){

    let arrayDePromesas = [];

    for (let index = 0; index < 5; index++) {
        arrayDePromesas.push(simularRetardoAleatorio()) 
    }

    const promesasResultas = await Promise.all(arrayDePromesas)

    let suma = 0;
    
    promesasResultas.forEach(tiempoDePromesa => {
        suma = suma + tiempoDePromesa
    })

    console.log(suma)

    promesasResultas.push(suma);

    return promesasResultas;
}

ejecutarVariosRetardos().then(resultado => {
    console.log(resultado);
})