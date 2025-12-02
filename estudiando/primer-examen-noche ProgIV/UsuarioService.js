class UsuarioService {
  constructor(arrayDeUsuarios) {
    this.arrayDeUsuarios = arrayDeUsuarios;
  }

  obtenerValorDeParametro(parametro, usuario) {
    const valorParametro = parametro.split(".").reduce((acumulador, item) => {
      acumulador = acumulador?.[item];
      return acumulador;
    }, usuario);

    return valorParametro;
  }

  buscarUsuarioPorParametro(parametro, valor) {
    const usuarioEncontrado = this.arrayDeUsuarios.find(
      (usuario) => this.obtenerValorDeParametro(parametro, usuario) === valor
    );

    if (usuarioEncontrado) {
      console.log("Usuarios encontrados");
      console.log(usuarioEncontrado);
    } else {
      console.log("Usuario no encontrado");
    }
  }
  no;

  detectarUsuariosConDireccionesIncompletas() {
    let hayUsuariosIncompletos = false;

    this.arrayDeUsuarios.forEach((usuario) => {
      const elementosDeDireccion = Object.entries(usuario.address);

      if (!(elementosDeDireccion.length === 5)) {
        hayUsuariosIncompletos = true;
      }
    });

    if (hayUsuariosIncompletos) {
      console.log("Hay usuarios con dirección incompleta");
    } else {
      console.log("No hay usuarios con dirección incompleta");
    }
  }

  verCompaniaConMasUsuariosAsociados() {
    const usuariosPorCompania = this.arrayDeUsuarios.reduce(
      (acumulador, usuario) => {
        acumulador[usuario.company.name] =
          (acumulador[usuario.company.name] || 0) + 1;
        return acumulador;
      },
      {}
    );

    const companiaConMasUsuarios = Object.entries(usuariosPorCompania)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 1);

    console.log(companiaConMasUsuarios);
  }
}

module.exports = UsuarioService;
