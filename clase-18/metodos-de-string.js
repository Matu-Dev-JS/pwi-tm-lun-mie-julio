//Metodos de string

//['p', 'e', 'p', 'e']

/* let nombre = 'pepe'


console.log(nombre[0])
console.log(nombre.length)
 */
/* console.log(mensaje.includes("hola")) */
/* 
console.log(mensaje.toUpperCase())
mensaje = mensaje.toLowerCase()
console.log(mensaje) */

/* let mensaje = 'HoLa a todos, como estan?'
let palabraBuscada = 'hOla'
 */
/* mensaje = mensaje.toLowerCase()
palabraBuscada = palabraBuscada.toLowerCase()

console.log(mensaje.includes(palabraBuscada)) */

/* let resultado = mensaje.toLowerCase().includes(palabraBuscada.toLowerCase())
console.log(resultado) */

/* console.log(buscarPalabraEnString('CoMo', mensaje))

function buscarPalabraEnString (palabraBuscada, string){
    let stringLowerCase = string.toLowerCase()
    let palabraBuscadaLowerCase = palabraBuscada.toLowerCase()
    return stringLowerCase.includes(palabraBuscadaLowerCase)
} */

/* let mensaje = 'HoLa a todos, como estan?, todos estan bien?'
 */

/* console.log(mensaje.replace('todos', 'todas'))
console.log(mensaje.replaceAll('todos', 'todas')) */

//Elimina los espacios dobles de los bordes (final e inicio)
/* console.log(mensaje.trim()) */


/* let nombre = 'pepe' */

/* recibe un numero y repite el string en base a ese numero  */
/* console.log(nombre.repeat(10)) */

//trae el caracter en la posicion 0
/* console.log(nombre.charAt(0)) */

//Nos permite transformar un string en un array
/* let mensajeArray = mensaje.split(' ') */
/* mensajeArray.push('juan') */

/* console.log(`En el mensaje hay ${mensajeArray.length} palabras`) */


/* let mesnaje2 = 'Hola%20como%20estas'

console.log(mesnaje2.split('')) */

/* let mensaje = 'HoLa a todos,  como estan?,  todos  estan  bien?' */

//Arrow function

//Verificar si es un numero

console.log(verificarNumero(10))
console.log(verificarNumero('pepe'))

/* function verificarNumero (numero){
    return !isNaN(numero)
} */



const verificarNumero = (numero) => {
    return !isNaN(numero)
}
/* const verificarNumero = (numero) => {
    return !isNaN(numero)
} */

