import React from 'react'
import {Formulario} from './Components/Formulario'

/* 
Componente Funcional
Un componente es una funcion (normal o en flecha) que devuelve JSX (Algo parecido a HTML pero con superpoderes)
Un componente solo debe retornar un elemento padre
Si queremos retornar 2 o mas hermanos sin un elemento padre podemos usar fragmentos 
    Ejemplo:
        Sin fragmento
            return (
                <div>
                    <h1></h1>
                    <h2></h2>
                </div>
            )
        Con fragmento:
            return (
                <\>
                    <h1></h1>
                    <h2></h2>
                </>
            )
Por encima del return podemos hacer toda la logica de nuestro componente
Las variables pueden guardar JSX
Los componentes DEBEN IR EN MAYUSCULA
Las paginas en React son SPA = Single Page Application
*/

const App = () => {
    let nombre = 'pepe'

    let resultado = <h1>No se quien soy</h1>

    if(nombre == 'pepe'){
        resultado = <h1>Soy pepe</h1>
    }
    return (
        <>
            <div className='caja-1'>
                hola {nombre}
                <Formulario/>

            </div>
            <div>
                {resultado}
            </div>
        </>

    )
}





export default App
