/* let nombre = 'pepe'
let apellido = 'suarez'
let edad = 26

console.log('Hola, mi nombre es ' + nombre + ' y mi apellido es ' + apellido + ' y tengo ' + edad + ' años')

console.log(`Hola, mi nombre es ${nombre} y mi apellido es ${apellido} y tengo ${edad} años`)

const cliente = {
    nombre: 'maria',
    apellido: 'reinado',
    'edad actual': 26
}

console.log(`Hola, mi nombres es ${cliente.nombre} y mi apellido es ${cliente.apellido} y tengo ${cliente['edad actual']}` )
 */
/* 
//Obtener un array de strings con las claves/propiedades de mi objetos
console.log(Object.keys(cliente))

//Obtener un array con los valores de mi objeto ordenado por el orden de declaracion
console.log(Object.values(cliente)) 
*/
let nombre = 'juan'
//                               0            1          2
/* const usuarios_conectados = ['Profe UTN', 'Augusto', 'Alejandro', nombre]
 */
const usuarios_conectados = [
    {
        nombre: 'Profe UTN',
        id: 1,
        isAdmin: true,
        isMuted: false,
        isOnCamara: false,
        image: 'http://direccion-imagen.jpg'
    },
    {
        nombre: 'Augusto',
        id: 2,
        isAdmin: false,
        isMuted: false,
        isOnCamara: false,
        image: 'http://direccion-imagen.jpg'
    },
    {
        nombre: 'Alejandro',
        id: 3,
        isAdmin: false,
        isMuted: false,
        isOnCamara: false,
        image: 'http://direccion-imagen.jpg'
    }
]
usuarios_conectados.push({
    nombre: 'Marcelo',
    id: 4,
    isAdmin: false,
    isMuted: false,
    isOnCamara: false,
    image: 'http://direccion-imagen.jpg'
})
/* 
usuarios_conectados[1] = 'Mateo Devola'
console.log(usuarios_conectados[1])
console.log(usuarios_conectados) 
*/
//Listar a los usuarios conectados

for(const usuario of usuarios_conectados){
    console.log(`${usuario.nombre} esta conectado`)
}

/* 
Esto hace el for of por detras
{
    let usuario = usuarios_conectados[0]
    console.log(usuario + ' esta conectado')
}

{
    let usuario = usuarios_conectados[1]
    console.log(usuario + ' esta conectado')
}

{
    let usuario = usuarios_conectados[2]
    console.log(usuario + ' esta conectado')
}

{
    let usuario = usuarios_conectados[3]
    console.log(usuario + ' esta conectado')
} 
    */