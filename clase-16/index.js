/* ARRAYS */

/* 
Sinonimos:
-listas/list
-coleccion/collection
-matriz/matrices
-Array/arreglo
*/

/* 
Sirven:
-listar elementos
*/


/* const listaNumeros = [2, 3, 3]



const diasQuePagueATiempo = [ true, true, false, true]

const arrayRandom = [2, 'pepe', false]
 */


/* Indice/index: la posicion de un elemento en array */
//                 0        1       2
/* const nombres = ['pepe', 'juan', 'maria'] */

//Si quiero llamar a maria deberia conocer su posicion
/* console.log(nombres[2]) */

/* const tateti = [
    ['X', ' ', 'O'],
    ['O', 'X', ' '],
    ['O', ' ', 'X']
] */

/* console.log(tateti[1][1]) */


/* //                 0       1       2
const nombres = ['pepe', 'juan', 'maria', 'pedro', 'valentina']

//Propiedad length: Me dice la cantidad de elementos que tiene mi array
console.log('Tengo ' + nombres.length + ' personas en la lista')


for(let i = 0; i < nombres.length; i = i + 1){
    console.log('valor indice: ' + i)
    console.log('Elemento en la posicion ' + i + ' es: ' + nombres[i])
} */

/* 
iterator
index
*/

/* 
function calcularPromedio (notas){
    let acumulador = 0
    for(let i = 0; i < notas.length; i = i + 1){
        acumulador = acumulador + notas[i]
    }
    return (acumulador / notas.length)
}

console.log(calcularPromedio([9, 9, 10]))
console.log(calcularPromedio([6, 7, 9])) 
*/
/* 
for(let element of array){
    La accion
}
*/

//FOR OF
/* const nombres = ['pedro', 'maria', 'juan']

for(let nombre of nombres){
    console.log(nombre)
} */

/* Pasar a for of */


/* function calcularPromedio (notas){
    let acumulador = 0
    for(let i = 0; i < notas.length; i = i + 1){
        acumulador = acumulador + notas[i]
    }
    return (acumulador / notas.length)
} */

/* function promediar(notas){
    let sumatoria = 0
    for(let nota of notas){
        sumatoria = sumatoria + nota
    }
    return sumatoria / notas.length
}
 */
/* Metodos de array */


const nombres = ['juanito', 'pedrito']

/* let nombre = prompt('dime tu nombre') */

//push nos permite agregar un elemento al final del array
//nombres.push(nombre)

//unshift nos permite agregar un elemento al principio del array
//nombres.unshift(nombre)

//pop nos permite eliminar un elemento del final del array
//nombres.pop()

//shift nos permite eliminar el primer elmento del array
//nombres.shift()

//includes() nos permite saber si x elemento esta incluido en el array
//console.log(nombres.includes('pedrito'))

console.log(nombres)


/* 
categoriaSeleccionada = 'TECNOLOGIA'
categorias = ['TECNOLOGIA', 'CIENCIA'] 

por cada producto vamos a hacer producto.categorias.includes(categoriaSeleccionada)
*/


/* 
1)
Crear una funcion que reciba un array de letras y se encargue de devolver un string con todas las letras concatenadas

Ejemplo:

concatenar(['a', 'b', 'c'])
devolvera 'abc'

2)
Crear una funcion que reciba un array de numeros y devuelva el mayor de todos

Ejemplo:

mayor([2, 3, 4, 5, 6])
devolvera 6

3)
Crear una funcion llamada calcular, que reciba una operacion (la cual puede ser '+', '-', '*', '/') y dos numeros y devuelva el resultado de la operacion

Ejemplo:

calcular('+', 2, 3)
devolvera 5


*/