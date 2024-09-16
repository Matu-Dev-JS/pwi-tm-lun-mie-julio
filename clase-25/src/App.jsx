import React from 'react'
import './style.css'
import ContactList from './Components/ContactList/ContactList'

function App() {
  /* 
  Documentacion de listas en react:
  https://es.react.dev/learn/rendering-lists
  */
 /*  const contactos =  ['pepe', 'maria', 'juan', 'pedro']
  const contactosLista = contactos.map((contacto, indice, lista) =>{
    return (
      <div key={indice + contacto} >
        {indice + 1} {contacto}
      </div>
    )
  })
  console.log(contactosLista) */


  /* 
  Objetivo
  const contactosLista = [
    <div>pepe</div>,
    <div>Maria</div>,
    <div>Juan</div>,
    <div>Pedro</div>
  ] */
    const listaContactos = [
      {
          nombre: 'Pepe Suarez',
          status: 'CONNECTED',
          iniciales: 'PS',
          id: 1
      },
      {
          nombre: 'Maria Gutierrez',
          status: 'DISCONNECTED',
          iniciales: 'MG',
          id: 2
      },
      {
          nombre: 'Juan Perez',
          status: 'DISCONNECTED',
          iniciales: 'JP',
          id: 3
      },
      {
          nombre: 'Pedro Gonzalez',
          status: 'CONNECTED',
          iniciales: 'PG',
          id: 4
      },
  ]
  
  return (
    <div>
      
      <div>
        <h1 className='titulo'>Lista de contactos</h1>
       
        <ContactList listaContactos={listaContactos}/>

        <ContactList listaContactos={listaContactos}/>
      </div>
    </div>
  )
}

export default App
