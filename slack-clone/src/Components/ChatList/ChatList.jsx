import React, { useState } from "react"
import ChatItem from "../ChatItem/ChatItem"

const Chatlist = ({ mensajes }) => {
    const [ error, setError ] = useState({text: '', isError: false})
    const handleSubmitMessage = (evento) => {
        //Evento son datos del evento en particular
        //event.preventDefault() previene el comportamiento por defecto de nuestro evento
        //Osea la pagina no recargara
        evento.preventDefault()
        //Capturar los valores de mi formulario
        const formulario = new FormData(evento.target)
        const mensaje = formulario.get('mensaje')
        if(!mensaje){
            setError({isError: true, text: 'No has escrito nada'})
        }
        else {
            //Si no hay error entonces devuelvo al estado de error a su valor inicial
            setError({text: '', isError: false})
            const nuevoMensaje = {author: 'YO', text: mensaje, id: 5, hour: '20:22'}
            mensajes.push(nuevoMensaje)
        }
    }

    return (

        <div>
            <div className="mensajes">
                {
                    mensajes.map((mensaje) => {
                        return (
                            <ChatItem key={mensaje.id} author={mensaje.author} text={mensaje.text} />
                        )
                    })
                }
            </div>
            {/* Este es mi formulario de envio de mensajes */}
            <form onSubmit={handleSubmitMessage}>
                <input placeholder="Escriba algo..." name="mensaje"/>
                {error.isError && <span>{error.text}</span> }
                <button type="submit">Enviar mensaje</button>
            </form>

           

        </div>
    )
}



export default Chatlist


//Version antigua

/* const saludar1 = (params) => {
    const nombre = params.nombre
    const apellido = params.apellido
    console.log(`Hola soy ${nombre} ${apellido}` )
} */

//Version mejorada
/* const saludar = ({nombre, apellido}) => {

    console.log(`Hola soy ${nombre} ${apellido}` )
}
  

saludar({nombre: 'pedro', apellido: 'suarez'})
saludar({nombre: 'juan', apellido: 'suarez'}) */