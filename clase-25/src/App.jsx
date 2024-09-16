import React from 'react'


function App() {
  /* 
  Documentacion de listas en react:
  https://es.react.dev/learn/rendering-lists
  */
  const contactos =  ['pepe', 'maria', 'juan', 'pedro']
  const contactosLista = contactos.map((contacto, indice, lista) =>{
    return (
      <div key={indice + contacto} >
        {indice + 1} {contacto}
      </div>
    )
  })
  console.log(contactosLista)
  /* 
  Objetivo
  const contactosLista = [
    <div>pepe</div>,
    <div>Maria</div>,
    <div>Juan</div>,
    <div>Pedro</div>
  ] */
  return (
    <div>
      
      <div>
        <h1 className='titulo'>Lista de contactos</h1>
        {contactosLista}
      </div>
    </div>
  )
}

export default App
