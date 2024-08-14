
/* OBJETOS */

/* Metodos de array */

/* 
-Acciones que solo se pueden hacer en un array
*/

const array = []

//agregar al final
/* array.push(8)
array.push(10) */

//Eliminar el ultimo
/* array.pop() */

//agregar al inicio
/* array.unshift(9) */

//eliminar el primero

/* array.shift() */

/* console.log(array)
 */

const nombres = ['pepe', 'maria', 'pedro', 'juan', 'maria', 'maria']


while(nombres.includes('maria')){
    let posicionMaria = nombres.indexOf('maria')
    nombres.splice(posicionMaria, 1)
}
console.log(nombres)

/* 
    Hacer una funcion que reciba un array de nombres y un nombreAEliminar y retorne un nuevo array sin nombres igual a nombreAEliminar
    ejemplo:
    eliminarNombres(['pedro', 'predro', 'juan'], 'pedro') 
    debe retornar: ['juan']
*/

/* 
MALA PRACTICA
delete nombres[0]
console.log(nombres) 
*/

/* let posicionMaria = nombres.indexOf('maria')
console.log('maria esta en la posicion: ' + posicionMaria) */

/* 
Parametros:
-1: start / desde que posicion quiero empezar a eliminar 
-2: deleteCount / cantidad a eliminar
-3: nuevos elementos a agregar
*/
/* nombres.splice(posicionMaria, 1)

console.log(nombres) */

/* Quiero agregar a juan entre pedro y maria */
/* const nombres = ['pedro', 'maria']

const posicionMaria = nombres.indexOf('maria')
nombres.splice(posicionMaria, 0, 'juan', 'carlitos')

console.log(nombres) */

