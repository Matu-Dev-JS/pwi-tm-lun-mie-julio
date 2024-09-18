import React from 'react'
import './style.css'

import listaContactos from './data-example'
import { files } from './data-files'

/* 
En vez de hacer esto
import ContactList from './Components/ContactList/ContactList'
import FileList from './Components/FileList/FileList' 
*/

//Podemos hacer esto: (Solo si crearon a index.js dentro de components)
import { ContactList, FileList } from './Components'

//Por defecto llama al index.js dentro de la carpeta icons
import { ShieldIcon, TankIcon } from './Icons'
import { BiAngry } from "react-icons/bi";
import { FILE_ICONS } from './utils/constants'

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
    
  
  return (
    <div>
      
      <div>
        <h1 className='titulo'><TankIcon/> Lista de archivos <ShieldIcon className='icon-shield'/></h1>
        {/* <img src="/images/captura.png" alt="" />
        <ContactList listaContactos={listaContactos}/>
        <ContactList listaContactos={listaContactos}/> */}
        
        <FileList files={files}/>
        
      </div>
    </div>
  )
}

export default App
