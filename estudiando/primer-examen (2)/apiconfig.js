async function apiConfig(url){
    const request = await fetch(url)
    let response = {}

    if (!request.ok){
        throw new Error("Ha sucedido un error en la solicitud de la API", request.statusText);
    }
    else{
       response = request.json();
    }
    
    const resultado = await response;

    return resultado
}

export default apiConfig;