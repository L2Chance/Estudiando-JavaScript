class CruzaService {
  constructor(arrayDePublicaciones, arrayDeUsuarios) {
    this.arrayDePublicaciones = arrayDePublicaciones;
    this.arrayDeUsuarios = arrayDeUsuarios;
  }

  encontrarUsuariosSinPublicacionesVersionComplicada() {
    const conteoDePublicacionesPorUsuario = this.arrayDePublicaciones.reduce(
      (acumulador, publicacion) => {
        const idUsuario = publicacion.userId;
        acumulador[idUsuario] = (acumulador[idUsuario] || 0) + 1;
        return acumulador;
      },
      {}
    );

    const conteoDePublicacionesPorUsuarioArray = Object.entries(
      conteoDePublicacionesPorUsuario
    );

    let usuariosSinPublicaciones = this.arrayDeUsuarios;

    conteoDePublicacionesPorUsuarioArray.forEach((elemento) => {
      usuariosSinPublicaciones = usuariosSinPublicaciones.filter(
        (usuario) => usuario.id != Number(elemento[0])
      );
    });

    console.log(usuariosSinPublicaciones);
  }

  encontrarUsuariosSinPublicaciones() {
    const usuariosConPublicaciones = new Set(
      this.arrayDePublicaciones.map((publicacion) => publicacion.userId)
    );

    const usuariosSinPublicaciones = this.arrayDeUsuarios.filter(
      (usuario) => !usuariosConPublicaciones.has(usuario.id)
    );

    console.log(usuariosSinPublicaciones);
  }

  obtenerProporcionDePublicacionesPorUsuario() {
    let cont = 0;

    this.arrayDePublicaciones.forEach((publicacion) => {
      cont = cont + 1;
    });

    const publicacionesPorUsuario = this.arrayDePublicaciones.reduce(
      (acumulador, publicacion) => {
        acumulador[publicacion.userId] =
          (acumulador[publicacion.userId] || 0) + 1;
        return acumulador;
      },
      {}
    );

    const porcentajeDePublicacionesPorUsuario = Object.entries(
      publicacionesPorUsuario
    ).reduce((acumulador, item) => {
      acumulador[item[0]] = (item[1] * 100) / cont + "%";
      return acumulador;
    }, {});

    console.log("Total de publicaciones: ", cont);
    console.log("Porcentaje de publicación por usuario");
    console.log("-----------------------------");
    console.log(porcentajeDePublicacionesPorUsuario);
  }

  obtenerCiudadConMayorPromedioDePublicaciones() {
    const publicacionesPorCiudad = this.arrayDePublicaciones.reduce(
      (acumulador, publicacion) => {
        const usuarioActual = this.arrayDeUsuarios.find(
          (usuario) => usuario.id === publicacion.userId
        );

        const ciudadDeUsuario = usuarioActual.address.city;

        acumulador[ciudadDeUsuario] = (acumulador[ciudadDeUsuario] || 0) + 1;
        return acumulador;
      },
      {}
    );

    const usuarioPorCiudad = this.arrayDeUsuarios.reduce(
      (acumulador, usuario) => {
        acumulador[usuario.address.city] =
          (acumulador[usuario.address.city] || 0) + 1;
        return acumulador;
      },
      {}
    );

    const promedioDePublicacionesPorCiudad = Object.keys(
      publicacionesPorCiudad
    ).reduce((contador, ciudad) => {
      const cantidadDeUsuarios = usuarioPorCiudad[ciudad];
      const cantidadDePublicaciones = publicacionesPorCiudad[ciudad];

      let promedio = cantidadDePublicaciones / cantidadDeUsuarios;

      contador[ciudad] = promedio;
      return contador;
    }, {});

    const ciudadConMayorPromedioDePublicacionesPorUsuario = Object.entries(
      promedioDePublicacionesPorCiudad
    )
      .sort((a, b) => b[1] - a[1])
      .slice(0, 1);

    console.log("Ciudad con mayor promedio de publicaciones por usuario");
    console.log("-----------------------------");
    console.log(ciudadConMayorPromedioDePublicacionesPorUsuario);
  }
}

module.exports = CruzaService;
