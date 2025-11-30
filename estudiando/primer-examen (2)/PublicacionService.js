class PublicacionService {
  constructor(arrayDeObjetos) {
    this.arrayDeObjetos = arrayDeObjetos;
  }

  mostrarContenido() {
    console.log(this.arrayDeObjetos);
  }
}

module.exports = PublicacionService;
