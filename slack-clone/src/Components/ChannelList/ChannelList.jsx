//Buena practica
import React from 'react'

const ChannelList = (props) => {
    console.log(props)

    const canalesJSX = props.canales.map((canal) => {
        return (
            <div key={canal.id}>
                <a>
                    {canal.nombre}
                </a>
            </div>
        )
    })


    return (
        <>
            <h1>{props.titulo}</h1>
            {canalesJSX}
        </>
    )
}

export default ChannelList
