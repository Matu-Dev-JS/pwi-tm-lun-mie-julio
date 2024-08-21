/* 
Sintaxis de importaciones:

import {nombre_variable_a_importar} from 'direccion relativa del archivo que contiene la variable'
*/

import {sumar as add, nombre as name} from './math.js'

/* const nombres = ['PEPE', 'MARIA', 'JUAN']


let lista = 'Lista de nombres:'
for(let  nombre of nombres){
    lista = lista + '\n-' + nombre
}
console.log(add(1, 2))
console.log(lista)
console.log(name) */
/* alert(lista) */




/* 
Por cada numero de la lista verificar si es mayor a 10, y en caso de ser asi se agregara a otro array (resultado)
*/

/* const obtenerNumerosMayores = (numeros, numeroMayorA) => {
    const resultado = []

    for(let numero of numeros ){
        if(numero >= numeroMayorA){
            resultado.push(numero)
        }
    }

    return resultado
}

let numeros_1 = [ 8, 20, 40, 2] // [20, 40]

console.log(obtenerNumerosMayores(numeros_1, 10))
console.log(obtenerNumerosMayores([20, 90, 80, 1], 30)) */

//Genial, me gustaria que hagas otra para mayores o igual a 100


/* for(let i = 1; i <= 10; i = i + 1){

    if(i === 5){
        continue
    }
    if(i === 5){
        break
    }
    console.log(i)
} */

const nombres = []

for(let i = 1; i <= 3; i = i + 1){
    let nombre = prompt('Ingrese su nombre')
    if(nombre === 'cancelar'){
        alert("has cancelado el programa")
        break
    }
    nombres.push(nombre)
}