class usuarioService {
  constructor(arrayDeUsuarios) {
    this.arrayDeUsuarios = arrayDeUsuarios;
  }

  obtenerValorDelParametro(usuario, parametro) {
    return parametro
      .split(".")
      .reduce((acumulador, item) => acumulador?.[item], usuario);
  }

  buscarUsuarioPorParametro(parametro, valor) {
    const usuarioEncontrado = this.arrayDeUsuarios.find(
      (usuario) => this.obtenerValorDelParametro(usuario, parametro) === valor
    );

    if (!usuarioEncontrado) {
      console.log("Usuario no encontrado");
    } else {
      console.log("Usuario encontrado:", usuarioEncontrado);
    }
  }

  verificarUsuarioDuplicado(valor) {
    let contador = 0;
    if (valor.includes("@")) {
      this.arrayDeUsuarios.forEach((usuario) => {
        if (usuario.email === valor) {
          contador += 1;
        }
      });
    } else {
      this.arrayDeUsuarios.forEach((usuario) => {
        if (usuario.username === valor) {
          contador += 1;
        }
      });
    }

    if (contador != 0) {
      if (contador > 1) {
        console.log("El usuario está repetido.");
      } else {
        console.log("El usuario no está repetido.");
      }
    } else {
      console.log("No se encontró el usuario en la base de datos");
    }
  }

  buscarCiudadConMásUsuariosRegistrados() {
    const conteoDeUsuariosPorCiudad = this.arrayDeUsuarios.reduce(
      (acumulador, usuario) => {
        const ciudad = usuario.address?.city;
        if (!ciudad) return acumulador;

        acumulador[ciudad] = (acumulador[ciudad] || 0) + 1;
        return acumulador;
      },
      {}
    );

    const ciudadConMasUsuarios = Object.entries(
      conteoDeUsuariosPorCiudad
    ).reduce((mayor, actual) => {
      const [ciudad, cantidad] = actual;
      const [ciudadMayor, cantidadMayor] = mayor;

      return cantidad > cantidadMayor ? actual : mayor;
    });

    console.log(ciudadConMasUsuarios);
  }
}

module.exports = usuarioService;
