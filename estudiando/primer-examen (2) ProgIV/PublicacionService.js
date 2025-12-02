class PublicacionService {
  constructor(arrayDePublicaciones) {
    this.arrayDePublicaciones = arrayDePublicaciones;
  }

  listarPublicacionesPorUsuario(idUsuario) {
    this.arrayDePublicaciones.forEach((publicacion) => {
      if (publicacion.userId === idUsuario) {
        console.log(publicacion);
      }
    });
  }

  listarCincoUsuariosConMásContenido() {
    const conteoDePublicacionesPorUsuario = this.arrayDePublicaciones.reduce(
      (acumulador, actual) => {
        const idUsuario = actual.userId;
        acumulador[idUsuario] = (acumulador[idUsuario] || 0) + 1;
        return acumulador;
      },
      {}
    );

    const topCincoPublicacionesPorUsuario = Object.entries(
      conteoDePublicacionesPorUsuario
    )
      .sort((elementoA, elementoB) => elementoB[1] - elementoA[1])
      .slice(0, 5);

    console.log(topCincoPublicacionesPorUsuario);
  }

  listarPublicacionPorPalabraClave(palabra) {
    this.arrayDePublicaciones.forEach((publicacion) => {
      if (
        publicacion.body.includes(palabra) ||
        publicacion.title.includes(palabra)
      ) {
        console.log(publicacion);
      }
    });
  }

  obtenerProporcionDePublicacionesPorUsuario() {
    let cont = 0;

    this.arrayDePublicaciones.foreach((publicacion) => {
      cont = cont + 1;
    });
  }
}

module.exports = PublicacionService;
