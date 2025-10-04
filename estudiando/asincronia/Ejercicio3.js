/*Crea una función asíncrona llamada simularCarga que reciba un número de milisegundos. La función debe simular un tiempo de carga y, después de ese tiempo, 
resolver la promesa con un mensaje "Carga completada en X ms". Usa async/await para esperar a que la promesa se resuelva.

Pista: Usa new Promise con setTimeout.*/

async function simularCarga(milisegundos){
    const resultado = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hola mundo");
        }, milisegundos)
    })

    return resultado;
}

simularCarga(1000).then(resuelto => {
    console.log(resuelto);
}).catch(error => {
    console.error("El resultado falló", error)
}).finally(() => {
    console.log("El programa ha finalizado")
})