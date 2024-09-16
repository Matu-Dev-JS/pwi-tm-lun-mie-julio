import React from 'react'
import './ContactList.css'

const ContactList = (props) => {
   
    const listaContactosJSX = props.listaContactos.map((contacto) => {
        let classNameConnectionStatusCircle = 'connection-status-circle ' + 'connection-status-circle-' + contacto.status.toLowerCase()
        return (
            <div key={contacto.id} className='contacts-profile-item'>
                <div className='contacts-profile-picture-container'>
                    <div className='contacts-profile-picture'>{contacto.iniciales}</div>

                    <span className={classNameConnectionStatusCircle}></span>


                </div>
                <div className='contacts-profile-name'>
                    {contacto.nombre}
                </div>
            </div>
        )
    })
    return (
        <div className='contacts-profile-list'>
            {listaContactosJSX}
        </div>
    )
}

export default ContactList