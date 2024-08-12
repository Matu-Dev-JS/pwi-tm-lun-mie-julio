/* 
Practica de funciones y bucles:
Crear una funcion llamada sumatoria(cantidad) que recibira un numero llamado cantidad y la funcion solicitara la cantidad de numeros que se indique en el parametro cantidad y los sumara

Ejemplo:
sumatoria(2) solicitara 2 numeros y los acumulara, dara como valor de retorno la suma de los 2 numeros
Si el primer numero es 3 y el segundo 2, el retorno de la funcion debe ser 5


Crear una funcion llamada saludar(nombre), dicha funcion recibira un nombre y retornara un string que sea 'hola {nombre}'
Ejemplo:
saludar('pepe') retornara el string 'hola pepe'


Crear una funcion llamada seleccionar, la misma recibira un string y retornara un valor en base al string recibido
las opciones validas son:
'sumar', '+', 'add' retornara 'SUMAR'
'restar', '-', 'subtract' retornara 'RESTAR'
'multiplicar', '*', 'multiply' retornara 'MULTIPLICAR'
Si no es ninguna de las anteriores debe retornar null */



/* 
Practica de funciones y bucles:
Crear una funcion llamada sumatoria(cantidad) que recibira un numero llamado cantidad y la funcion solicitara la cantidad de numeros que se indique en el parametro cantidad y los sumara/acumulara

Ejemplo:
sumatoria(2) solicitara 2 numeros y los acumulara, dara como valor de retorno la suma de los 2 numeros
Si el primer numero es 3 y el segundo 2, el retorno de la funcion debe ser 5
*/


/* 
-Tiene que ser una funcion que recibe un parametro numerico y este parametro es la cantidad de veces que debo solicitar un numero
-A medida que voy solcitando numeros debere ir acumulandolos
*/

/* 
f(x) =  x * 2 + 1
f(x = 1) = 1 * 2 + 1 = 3
f(x = 2) = 2 * 2 + 1 = 5
*/


/**
 * Calcula la sumatoria de una cantidad determinada de valores ingresados por el usuario.
 *
 * @param {number} cantidad - La cantidad de valores a sumar.
 * @return {number} La sumatoria de los valores ingresados.
 */
function sumatoria (cantidad){

    let acumulador = 0

    for(let contador = 1; contador <= cantidad; contador = contador + 1){
        let numeroIngresado = Number(prompt('ingrese un numero'))
        acumulador = acumulador + numeroIngresado
    }

    return acumulador
}

/* Hace lo mismo pero que muestre por alerta */
/* Hace lo mismo pero que la cantidad venga del numero de la DB */



/* 
DRY = Dont repeat yourself
*/


/* let resultado = sumatoria(3) */
/* console.log(resultado)
alert(resultado) */


/* 2) */
function saludar(nombre) {
    return('Hola ' +  nombre + '!')
}

/* 3) */

/* function seleccionar(opcion) {

    let resultado = null

    if (opcion === 'sumar' || opcion === '+' || opcion === 'add') {
        resultado = 'SUMAR'
    } else if (opcion === 'restar' || opcion === '-' || opcion === 'subtract') {
        resultado = 'RESTAR'
    } else if (opcion === 'multiplicar' || opcion === '*' || opcion === 'multiply') {
        resultado = 'MULTIPlICAR'
    }

    return resultado
} */

/* Declarando la funcion seleccionar */
/* function seleccionar(opcion) {

    if (opcion === 'sumar' || opcion === '+' || opcion === 'add') {
        return 'SUMAR'
    } else if (opcion === 'restar' || opcion === '-' || opcion === 'subtract') {
        return 'RESTAR'
    } else if (opcion === 'multiplicar' || opcion === '*' || opcion === 'multiply') {
        return 'MULTIPlICAR'
    }

    return null
}


seleccionar() */
/* Invocando (solo sucede si existe la funcion (osea que fue declarada)) */
/* let resultado = seleccionar('multiply')
console.log(resultado) */