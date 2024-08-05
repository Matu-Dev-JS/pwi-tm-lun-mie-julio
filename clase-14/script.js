
/* 
Funciones nativas:
SI QUEREMOS ACTIVAR/INVOCAR/LLAMAR UNA FUNCION DEBEMOS USAR () al final
Las funciones pueden recibir valores (a esos valores los llamamos parametros)
prompt() => string | null
alert()
console.log()
*/
/* prompt('dime tu nombre', 'pepe') */

/* let nombre = 'pepe'
alert(nombre)
let resultadoAlerta = alert(10)
console.log('Resultado: ' + resultadoAlerta) */

/* let nombre = prompt('ingrese su nombre')
console.log('El resultado de prompt es: ' + nombre) */

/* Bloque de codigo */

/* 
{
    console.log('hola')
    alert('como estas?')
    let nombre = 'pepe'
    alert(nombre)
}
 */

/* CONDICIONES */

/* if(1 == 1){
    alert('verdadero')
} */
/* if(''){
    alert('verdadero')
}
else{
    alert('falso')
} */

/* let edad = prompt('ingrese su edad') */

/* SI mi edad es > 18 decir puede pasar sino decir no puede pasar */

/* if(edad == 18){
    alert('puede pasar')
}
else{
    alert('no puede pasar')
} */

/* 
Operadores logicos 
prompt
comparador mayor igual y menor igual
*/

/* Solicitar un numero entre 1 y 10 al usuario, si el numero es mayor a 10 O menor a 1 deberemos decir por alerta 'Dato incorrecto' caso contrario decir 'dato correcto' */

/* let numero = prompt(`ingresar un numero del 1 al 10`) //-1
if (numero > 0 && numero <= 10) {
    alert("Dato Correcto :heart:")
} else {
    alert("Dato Incorrecto:boom:")
} */

/* if (numero > 10 || numero < 0) {
    alert("Dato incorrecto")
} else {
    alert("Dato correcto")
} */

/* 
Tabla de la verdad:
And:
true && true = true
true && false = false
false && true = false
false && false = false

Or
true || true = true
false || true = true
true || false = true
false || false = false
*/



/* Solicitar un rol al usuario */
/* si el rol es admin entonces decir por alerta 'bienvenido al administrador' */
/* si el rol es super-admin entonces decir por alerta 'Opciones de superadministrador */
/* si el rol es owner entonces decir 'opciones de dueño' */
/* Si el rol es support enconces decir 'lista de incidencias' */
/* Sino es ninguno de los anteriores decir por alerta 'bienvenido' */


/* ELSE IF */
/* 
let rol = prompt('ingrese su rol') */

/* if(rol === 'superadmin'){
    alert('Opciones de superadministrador')
}
else{
    if(rol === 'admin'){
        alert('bienvenido al administrador')
    }
    else{
        if(rol === 'owner'){
            alert('Opciones de dueño')
        }
        else{
            if(rol === 'support'){
                alert('lista de incidencias')
            }
            else{
                alert('bienvenido')
            }
        }
    }
}
 */
/* if(rol === 'superadmin'){
    alert('Opciones de superadministrador')
}
else if(rol === 'admin'){
    alert('bienvenido al administrador')
}
else if (rol === 'owner'){
    alert('Opciones de dueño')
}
else if (rol === 'support'){
    alert('lista de incidencias')
}
else{
    alert('bienvenido')
}
 */


/* if(rol === 'superadmin'){
    alert('Opciones de superadministrador')
}
if(rol === 'admin'){
    alert('bienvenido al administrador')
}
if(rol === 'owner'){
    alert('Opciones de dueño')
}
if(rol === 'support'){
    alert('lista de incidencias')
} */


/* 
Solicitar al usuario un nombre y una edad

si el nombre es 'juan' decir 'bienvenido don juan
si el nombre es 'pepe'  y su edad es 21 decir 'pase don'
si la edad es mayor a 30 decir 'puede pasar'
si no es ninguno de los anteriores decir 'no puede pasar'
*/

/* let nombre = prompt("Ingrese su nombre")
let edad = Number(prompt("Ingrese su edad"))

if( nombre==="juan"){
    alert("Bienvenido Don Juan")
}else if(nombre === "pepe" && edad === 21){
 alert("Pase Don")
}else if(edad >= 30){
    alert("Puede pasar")
}else{
    alert("No puede pasar")
}
 */

/* 
let nombre = prompt('Decime tu nombre') 
let edad = prompt('ingrese su edad') */


/* CASO CORRECTO */

/* let nombre = prompt("Ingrese su nombre")
let edad = Number(prompt("Ingrese su edad"))

if( nombre==="juan"){
    alert("Bienvenido Don Juan")
}else if(nombre === "pepe" && edad === 21){
 alert("Pase Don")
}else if(edad >= 30){
    alert("Puede pasar")
}else{
    alert("No puede pasar")
} */


/* Decir por alerta 3 veces el mensaje hola mundo */

/* 
alert('hola mundo')
alert('hola mundo')
alert('hola mundo') */



/* FOR */

/* WHILE es un bucle condicional */
/* 
let contador = 1
while(contador <= 3){
    console.log('hola mundo')
    contador = contador + 1
} */


/* Pedir un nombre que debe ser si o si 'pepe' o 'juan' */

/* let nombre_seleccionado = prompt('Selecciona pepe o juan')
 */

/* Mientras el while no se resuelva nada se ejecutara despues */
/* while(nombre_seleccionado !== 'pepe' && nombre_seleccionado !== 'juan'){
    alert('Nombre no valido')
    nombre_seleccionado = prompt('Selecciona pepe o juan')

}
if(nombre_seleccionado === 'pepe'){
    alert('Bienvenido pepe')
} */


/* Solicitar al usuario una edad pero vamos a validar que sea una edad validad
un numero
*/

/* 
FUNCION NATIVA:

isNaN() le paso un dato y la funcion intentara pasarlo a numero, si el resultado es NaN entonces isNaN retorna true sino retorna false

*/
/* String(Number('pepe')) === 'NaN' Funcionamiento por detras*/ // 'NaN'

/* 

let edad = prompt('Ingrese su edad')

while( !edad  || isNaN(edad) ){
    alert("ERROR: la edad debe ser un number")
    edad = prompt('Ingrese la edad nuevamente')
}


alert('Edad ingresada correctamente') 
*/


/* 
For
Funciones
ambitos
*/