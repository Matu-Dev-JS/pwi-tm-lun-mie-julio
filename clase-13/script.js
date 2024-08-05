/* Tipos de datos:

string
boolean
null
undefined
number => 7, 6.4, NaN

*/
/* 
Constructor:
Number(dato) devuelve un dato numerico
String(dato) Devuelve un dato string
Boolean(dato) Devuelve un dato boolean
*/

/* Truthy y falsy 

Falsy:
-null
-undefined
-NaN
-0
-false
-''

Truthy:
-TODOS LOS VALORES DISTINTOS A LOS MENCIONADOS EL FALSY

*/

/* Operadores artitmeticos */

/* 

+: Concatenacion 
La concatenacion ocurre cuando HAY un string o mas en una operacion
Pasa el dato distinto de string a string y los une
Devuelve SIEMPRE un string

+: Suma
La suma ocurre cuando NO hay string en una operacion
Pasa el dato distinto de numero a numero
Devuelve siempre NUMBER

- Resta
Pasa el dato distinto de numero a numero
Devuelve siempre NUMBER

* Multiplicacion
Pasa el dato distinto de numero a numero
Devuelve siempre NUMBER

/ Division
Pasa el dato distinto de numero a numero
Devuelve siempre NUMBER

% modulo/resto de la division
Pasa el dato distinto de numero a numero
Devuelve siempre NUMBER


REGLAS:

Cualquier dato operado con NaN exepto la concatenacion da como resultado un NaN
*/

5 + 5 //number, 10 

undefined + 'NaN' //string, 'undefinedNaN'

'hola' + '1' //string, 'hola1'

true + false //number, 1

Number(NaN) - Number(NaN) //number, NaN

0 + null //number, 0

null + null //numerico, 0

3 * '5' //numerico, 15



//COMPARADORES devuelven Booleanos

/* 
== : Igualdad
=== : Estricta igualdad (Compara valor y tipo de dato) (Recomendado)
!= : Diferencia 
!== : Estricta diferencia (Recomendado)
> : mayor a 
< : menor a
>= : mayor o igual a 
<= : menor o igual a

Excepciones:

NaN siempre es distinto de cualquier valor, incluido el mismo NaN
null solo puede ser igual a null o undefined

*/

/* true === null //false

Boolean(true + false - 1) === Boolean(NaN) //true

Number("hola") === NaN //false

undefined == null //true

3 != (true + '1' + 1) //true
 */



/* Operadores Logicos */

/* 

! : NOT Devuelve el valor booleano opuesto al valor negado

!7 //false
!-10 //false
!'' //true

|| OR: 
Verifica si el primer valor es verdadero o falso, 
Si es verdadero devuelve el primer valor
Si es falso devuelve el segundo valor

'pepe' || 'maria' //'pepe'
0 || '' //''
NaN || 9 //9


&& AND:
Verifica si el primer valor es verdadero o falso, 
Si es verdadero devuelve el segundo valor
Si es falso devuelve el primer valor

7 && 0 //0
'pepe' && 'maria' //'maria'
'' && 0 //'' 
*/


/* Variables */

/* 
var
let
const
*/

//VAR

/* 
Se puede reasignar
Se puede declarar sin valor incial (automaticamente JS le asignara undefined)
Se puede redeclarar
Se puede acceder antes de su inicializacion / declaracion (TIENE HOISTING)
*/

//Hoisting

/* var nombre
var apellido



console.log(nombre)
nombre = 'pepe'
nombre = 'juan'
 */


//LET

/* 
Se puede reasignar
Se puede declarar sin valor incial (automaticamente JS le asignara undefined)
NO se puede redeclarar
No se puede acceder antes de su inicializacion / declaracion
*/

/* 
let nombre = 'pepe'
nombre = 'juan'
console.log(nombre) 
*/


//CONST
/* 
const nombre = 'pepe'

console.log(nombre)
 */

/* 
NO se puede reasignar
NO se puede declarar sin valor incial
NO se puede redeclarar
NO se puede acceder antes de su inicializacion / declaracion
*/


/* 
alert() Enviar una alerta
prompt() Solicita un dato (SIEMPRE RETORNA UN STRING o un NULL)
Si le damos a aceptar devuelve un string
Si le damos a cancelar devuelve un null
*/

/* alert('hola') */

let edad = Number(prompt('dame tu edad'))
console.log('El tipo de dato de edad es: ' + (typeof(edad)) )
console.log('Si tenes ' + edad + ' años vas a cumplir ' + (edad + 1) +  ' el año que viene' )


/* alert('Tu edad es ' + edad)
 */
/* Condiciones */
/* Ambitos */
/* bucles (for, while) */

