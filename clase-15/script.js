
/* isNaN('pepe') //true (podemos detectar no-numeros)
!isNaN('9') //true (podemos detectar numeros) */


/* Ambitos */
/* SOLO LO TIENEN LET Y CONST */


/* let result = 1

{
    let result = 10
    console.log(result)
}

console.log(result) */
/* var result 
if(true){
    var result = 10
    if(true){
        var result = 9
    }
    console.log(result)
}

console.log(result) */


/* pepe, juan, maria, juan, pedro, ramon, ramon, messi, julieta*/
/* let nombre = 'pepe'
console.log(nombre)

{
    let nombre = 'juan'
    console.log(nombre)
    {
        let nombre = 'maria'
        console.log(nombre)
    }
    console.log(nombre)
    {
        nombre = 'pedro'
        console.log(nombre)
        {
            nombre = 'ramon'
            console.log(nombre)
        }
        console.log(nombre)
    }
    nombre = 'messi'
    console.log(nombre)
}

nombre = 'julieta'
console.log(nombre) */


//BUCLE
//WHILE bucle condicional
//FOR bucle por conteo

/* decir 5 hola mundo por consola */

/* 
Cuantas veces? 5
Que accion voy a repetir? decir hola mundo por consola
*/

/* for(
    let contador = 1; 
    contador <= 5; 
    contador = contador + 1
){
    console.log('El valor de contador es:', contador)
    console.log('hola mundo')
} */


/* Contar de 1 a 5 */
/* condicion/limite = si se cumple sigue repitiendo */
/* Acumulacion/ritmo de actualizacion */

/* let contador = 1
while(contador <= 5){
    console.log('hola')
    contador = contador + 1
} */

/* WHILE TRUE */

/* let numero = prompt()

for(
    let contador = 1;
    isNaN(numero);
){
    numero = prompt('error: numero incorrecto')
} */
/* 
Vamos a solcitar al usuario 3 numeros y luego voy a sumarlos entre si y al finalizar debere mostrar por alerta el resultado 
*/
/* 
FOR 
Cuantas veces? 3 RESUELTO
que se repetira? solicitar el numero y acumularlo

*/
/* let sumatoria = 0

for(let contador = 1; contador <= 3; contador = contador + 1){

    let numero_solcitado = prompt('Ingrese el numero')

    while(!numero_solcitado || isNaN(numero_solcitado)){

        numero_solcitado = prompt('Error dato no valido: ingrese nuevamente')
    }  

    sumatoria = sumatoria + Number(numero_solcitado)
}

alert('El resultado de la sumatoria es: ' + sumatoria) */


//FUNCIONES son bloques de codigo almacenados en la memoria

/* DECLARAR LA FUNCION SALUDAR *//* 
function saludar (){
    console.log('Hola como estas?')
}
saludar()
saludar()
saludar()
 */


function sumar (numero1, numero2){
    return numero1 + numero2
}

let resultado1 = sumar(10, 6)

alert(resultado1)
console.log(resultado1)

/* 
calcularIva(numero) y mostrara por consola el 21% del numero recibido

x_numero * 0.21
x_numero * 1.21
x_numero (21 / 100)
*/