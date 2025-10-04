/*Crea una función asíncrona llamada obtenerDatos que reciba un booleano exito. La función debe devolver una new Promise.

Si exito es true, la promesa debe resolverse después de 1 segundo con el mensaje "Datos obtenidos exitosamente".

Si exito es false, la promesa debe ser rechazada después de 1.5 segundos con el mensaje "Error: No se pudieron obtener los datos".

Usa async/await para llamar a la función y manejar ambos casos (éxito y fracaso) con un bloque try/catch.*/


function obtenerDatos(exito){
        const nuevaPromesa = new Promise((resolve,reject) => {
            if (exito == true){
                setTimeout(() => {
                    resolve("Datos obtenidos exitosamente");
                }, 1000)
            }
            else{
                setTimeout(() => {
                    reject("Error: No se pudieron obtener los datos")
                }, 1500)     
            }
        })

        return nuevaPromesa;
}

async function hacerLlamado(){
    try {
        const resultado = await obtenerDatos(true)
        console.log("Resultado exitoso:", resultado)
    } catch (error) {
        console.log("Resultado incorrecto:", error);
    }
}

hacerLlamado(true)
