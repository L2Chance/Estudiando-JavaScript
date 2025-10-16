export class ApiFunction{
    url;

    constructor(url) {
    this.url = url;
  }

  async comprobarEstado(){
    const promesasFetch = fetch(this.url).then(response => {
        if (!response.ok){
            throw new Error("Ha sucedido un error al consultar en endpoint,", response.statusText);
        }
        else{
            return response.json();
        }
        
    })
    const resultado = await promesasFetch

    return resultado;
  }

}