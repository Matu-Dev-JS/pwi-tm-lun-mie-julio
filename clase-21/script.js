const accion_1 = () => {
    alert('hola has dado click en un boton de la pagina')
}

const button2HTML = document.getElementById('btn-2')

button2HTML.onclick = accion_1


/* 
Esta es la forma mas usada
*/

const button3HTML = document.getElementById('btn-3')

/* button3HTML.addEventListener('click', accion_1) */
button3HTML.addEventListener('dblclick', ()=> {
    alert('Estas presionando 2 veces')
})

/* 
CONTADOR CON JS y HTML:
Debemos desarrollar la funcionalidad de este contador:
HTML inicial:
<div>
    <button id="btn-decrementar" >-</button>
    <span id="contador-text" >0</span>
    <button id="btn-incrementar" >+</button>
</div>

Funcionalidades:
Llamar al span y mostrar inicialmente el texto interno en 0
llamar al boton de suma y resta y les asociaran respectivamente sus funciones

CONSEJO:
-Cada vez que sume o reste debere actualizar el innerText del span
-Crear una variable global que contenga el valor del contador


Parte 2:

El contador no puede ser menor a 1, en caso de que el contador sea 1 deberemos hacer que NO se ejecute la resta

El contador no puede ser mayor de 10, en caso de que el contador sea 10 NO ejecutaremos la suma

Parte 3:

Vamos a agregar un span de error en el contador, el span incialmente esta vacio:

<div class="contador">
    <button id="btn-decrementar" >-</button>
    <span id="contador-text" >0</span>
    <button id="btn-incrementar" >+</button>
    <span class="error-text"></span>
</div>

Si el usuario intenta incrementar a mas de 10 o decrementar a menos de 1
el texto de el span de error debe mostrar: "El contador no puede ser mayor de 10" o "El contador no puede ser menor a 1" segun corresponda

Si el usuario luego de que le de el error deja de cometerlo, ejemplo:
le dio al mas cuando estaba en 10, se mostro el texto de error pero luego le dio al menos (ahora el contador vale 9) entonces el TEXTO DE ERROR DEBE SER '' otra vez
*/

/* 
Funciones para pasar a numero un valor:
Number()
parseInt()
parseFloat()
*/

const botonRestar = document.getElementById('btn-decrementar')
const botonSumar = document.getElementById('btn-incrementar')
const contador = document.getElementById('contador-text')
const mensajeError = document.getElementById('error-text')




const setContador = (nuevoValorContador) => {
    valorActual = nuevoValorContador
    contador.innerText = valorActual
}

let valorActual 
setContador(4)
mensajeError.innerText = ''

botonRestar.addEventListener('click', () => {
    if (valorActual === 1) {
        mensajeError.innerHTML = 'El contador no puede ser menor que 1'
    } else {
        //Quiero cambiar el contador
        //-Cerebro: debes usar el setContador

        setContador(valorActual - 1)
        mensajeError.innerText = ''
    }
})

botonSumar.addEventListener('click', () => {
    if (valorActual === 10) {
        mensajeError.innerHTML = 'El contador no puede ser mayor que 10'
    } else {
        setContador(valorActual + 1)
        mensajeError.innerText = ''
    }
})

/* 
Parte 4:

Asi como hicimos una funcion set para el contador
podriamos plantearlo para el mensaje de error

Crear un estado de error y una funcion setError para modificar el texto de error
*/