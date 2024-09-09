import React from 'react'


const Titulo = (props) => {
    console.log(props.text)
    return (
        <h1 title={props.descripcion}>
            {props.text}
        </h1>
    )
}

const SubTitulo = () => {
    return (
        <h2>Soy un subtitulo</h2>
    )
}

const SubSubTitulo = () => {
    return (
        <h3>Soy un sub sub titulo</h3>
    )
}

export {Titulo, SubTitulo, SubSubTitulo}
export default Titulo