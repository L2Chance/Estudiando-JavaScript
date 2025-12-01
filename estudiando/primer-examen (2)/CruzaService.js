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
}

module.exports = CruzaService;
