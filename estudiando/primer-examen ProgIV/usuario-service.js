export class UsuarioService{
    arrayDeUsuarios

    constructor(arrayDeUsuarios){
        this.arrayDeUsuarios = arrayDeUsuarios
    }

    buscarUsuarioPorId(id){
        this.arrayDeUsuarios.forEach(usuario => {
            if (usuario.id === id){
                console.log(usuario);
            }
        });
    }

    buscarUsuarioPorEmail(email){
        this.arrayDeUsuarios.forEach(usuario => {
            if (usuario.email === email){
                console.log(usuario);
            }
        });
    }

    buscarUsuarioPorCiudad(ciudad){
        this.arrayDeUsuarios.forEach(usuario => {
            if (usuario.adress.city === ciudad){
                console.log(usuario);
            }
        });
    }

    encontrarUsuariosDuplicadosPorNickname(nickname){
        const duplicados = this.arrayDeUsuarios.reduce((contador, nickname) => {
            contador[nickname.username] = (contador[nickname.username] || 0) + 1;
            return contador;
        }, {})

        const arrayDeNicknames = Object.entries(duplicados);

        arrayDeNicknames.forEach(elemento => {
            if (elemento[0] === nickname){
                if(elemento[1] > 1){
                    console.log(`Efectivamente, el nickname ${nickname} esta repetido en la base de datos`)
                }else{
                    console.log(`El nickname ${nickname} no está repetido en la base de datos`);
                }
            }
        })
    }

    encontrarUsuariosDuplicadosPorEmail(email){
        const duplicados = this.arrayDeUsuarios.reduce((contador, usuario) => {
            contador[usuario.email] = (contador[usuario.email] || 0) + 1;
            return contador;
        }, {})

        const arrayDeEmails = Object.entries(duplicados);

        arrayDeEmails.forEach(elemento => {
            if (elemento[0] === email){
                if(elemento[1] > 1){
                    console.log(`Efectivamente, el email ${email} esta repetido en la base de datos`)
                }else{
                    console.log(`El email ${email} no está repetido en la base de datos`);
                }
            }
        })

    }

    encontrarCiudadConMasUsuariosRegistrados(){
        const ciudad = this.arrayDeUsuarios.reduce((contador, usuario) => {
            contador[usuario.address.city] = (contador[usuario.address.city] || 0) + 1;
            return contador;
        }, {})

        const valorMasRegular = Object.entries(ciudad).reduce((max, actual) => {
            if (actual[1] > max[1]){
                max = actual;
            }
            return max;
        })

        console.log("La ciudad con mas registrados es: ")
        console.log(valorMasRegular)
    }
}