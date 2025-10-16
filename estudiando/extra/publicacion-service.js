export class PublicacionService{
    arrayDePublicaciones

    constructor(arrayDePublicaciones){
        this.arrayDePublicaciones = arrayDePublicaciones;
    }

    listarPublicacionesPorIdDeUsuario(id){
        this.arrayDePublicaciones.forEach(publicacion => {
            if(publicacion.userId === id){
                console.log(publicacion)
            }
        });
    }

    listarPublicacionesPorPalabraClave(palabra){
        this.arrayDePublicaciones.forEach(publicacion => {
            if(publicacion.title.includes(palabra) || publicacion.body.includes(palabra)){
                console.log(publicacion)
            }
        });
    }

    listarPrimeros5UsuariosConMasContenido(){
        const listaDeUsuariosPorPublicacion = this.arrayDePublicaciones.reduce((contador, usuario) => {
            contador[usuario.userId] = (contador[usuario.userId] || 0) + 1;
            return contador;
        }, {})

        const arrayDePublicacionPorUsuario = Object.entries(listaDeUsuariosPorPublicacion)

        const top5Usuarios = arrayDePublicacionPorUsuario.sort((a,b) => b[1] - a[1]).slice(0,5)

        console.log(top5Usuarios)
    }

    encontrarUsuarioSinPublicacion(arrayDeUsuarios){
        const publicacionesPorUsuario = this.arrayDePublicaciones.reduce((contador, publicacion) => {
            contador[publicacion.userId] = (contador[publicacion.userId] || 0) + 1;
            return contador
        }, {})

        console.log(publicacionesPorUsuario)
        let bandera = false;

        const idsConPublicaciones = new Set(Object.keys(publicacionesPorUsuario))

        arrayDeUsuarios.forEach(usuario => {
            if(!idsConPublicaciones.has(String(usuario.id))){
                console.log(`El usuario ${usuario.id} no tiene publicaciones`)
                bandera = true
            }      
        })

        if(bandera === false){
                console.log("No hay usuarios sin publicaciones")
        }
    }

    verProporcionDePublicacionPorUsuario(){
        const publicacionesPorUsuario = Object.entries(this.arrayDePublicaciones.reduce((acumulador, publicacion) => {
            acumulador[publicacion.userId] = (acumulador[publicacion.userId] || 0) + 1
            return acumulador;
        }, {}))

        let totalPublicaciones = 0;

        console.log(publicacionesPorUsuario)

        publicacionesPorUsuario.forEach(elemento => {
            totalPublicaciones = totalPublicaciones + elemento[1];
        })

        console.log("Porcentaje de publicación por usuario")

        const proporcionDePublicacionesPorUsuario = publicacionesPorUsuario.map(elementoActual => { 
            return [elementoActual[0], `${elementoActual[1]/totalPublicaciones*100} %`]
        })

        console.log("El total de publicaciones es:",totalPublicaciones)
        console.log(proporcionDePublicacionesPorUsuario)
    }

    verCiudadConMayorActividadEnPromedio(arrayDeUsuarios){
        // Promedio de publicaciones por usuario = Total de publicaciones realizadas por usuarios de esa ciudad / Total de usuarios únicos registrados en esa ciudad 

        this.arrayDePublicaciones.forEach(elemento => {
            totalPublicaciones = totalPublicaciones + 1
        })

        let ciudad;

        //Esto me cuenta cantidad de publicaciones por ciudad
        const publicacionesPorCiudad = Object.entries(this.arrayDePublicaciones.reduce((acumulador, publicacion) => {
            arrayDeUsuarios.forEach((usuario) => {
                if (usuario.id == publicacion.userId){
                    ciudad = usuario.address.city
                }
            })
            acumulador[ciudad] = (acumulador[ciudad] || 0) + 1;
            return acumulador;
        }, {}))

        //Esto me cuenta la cantidad de usuarios por ciudad
        const usuariosPorCiudad = Object.entries(arrayDeUsuarios.reduce((acumulador, usuario) => {

            ciudad = usuario.address.city

            acumulador[ciudad] = (acumulador[ciudad] || 0) + 1;
            return acumulador;
        }, {}))

        const arrayFinal = [];
        let cantidadUsuariosActual = 0;
        let promedio = 0;

        publicacionesPorCiudad.forEach(ciudad => {
            usuariosPorCiudad.forEach(usuario => {
                if (usuario[0] === ciudad[0]){
                    cantidadUsuariosActual = usuario[1];
                }
            })
            if (cantidadUsuariosActual !== 0){
                promedio = ciudad[1]/cantidadUsuariosActual;
            }
            arrayFinal.push([ciudad[0], promedio])
        })

        console.log("La ciudad con mayor promedio de publicacion por usuario es:")
        console.log(arrayFinal.sort((a , b) => b[1] - a[1]).slice(0,1))
        
    }
}