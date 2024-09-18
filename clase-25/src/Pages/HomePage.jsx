import React from 'react'
import { ShieldIcon, TankIcon } from '../Icons'
import { files } from '../data-files'
import { FileList } from '../Components'

const HomePage = () => {
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
        ] 
            */
  return (
    <div>
        <h1 className='titulo'><TankIcon/> Lista de archivos <ShieldIcon className='icon-shield'/></h1>
        {/* <img src="/images/captura.png" alt="" />
        <ContactList listaContactos={listaContactos}/>
        <ContactList listaContactos={listaContactos}/> */}
        
        <FileList files={files}/>
    
  </div>
  )
}

export default HomePage