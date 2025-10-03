/*Crea una función llamada eliminarDuplicados que reciba un array con elementos duplicados. La función debe devolver un nuevo array que contenga 
solo elementos únicos, manteniendo el orden original.

Ejemplo: eliminarDuplicados([1, 2, 2, 3, 4, 3, 5]) debería devolver [1, 2, 3, 4, 5].

Pista: Puedes usar un Set o un objeto para llevar un registro de los elementos que ya has visto.*/ 

function eliminarDuplicados(array){
    let arraySinDuplicados = [];
    let conteo = 0;
    let elementoActual;

    array.forEach(element => {
        if (!arraySinDuplicados.includes(element)){
            arraySinDuplicados.push(element);
        }
    }
);
    console.log(arraySinDuplicados)
}

arrayDuplicados = [1, 2, 2, 3, 4, 3, 5]

eliminarDuplicados(arrayDuplicados)