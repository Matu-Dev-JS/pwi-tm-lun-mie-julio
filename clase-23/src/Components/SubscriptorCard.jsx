import React from 'react'

/* 
Props es un objeto que representa los valores pasados a nuesto componente

Ejemplo:

    Si mi componente lo usaron de esta manera:

        <SubscriptorCard nombre='Juancito'/>

    Props se vera:

        {nombre: 'Juancito'}
*/

/* 
Crear un componente de subscripcion que reciba tambien la fecha y el rol  

Quiero que cada carta tengan las siguientes clases:
subscriptor-card
subscriptor-card-{rol}

Si el rol del subscriptor es premium entonces debe tener

subscriptor-card subscriptor-card-premium

pero si es admin

subscriptor-card subscriptor-card-admin

*/

const SubscriptorCard = (props) => {
   
  return (
    <div className={'subscriptor-card subscriptor-card-'}>
        <span>Id: #{props.details.id}</span>
        <h3>{props.nombre}</h3>
        <p>{props.descripcion}</p>
        <span><b>Fecha:</b> 13/02/2015</span>
        <div>Premiun</div>
        <hr/>
    </div>
  )
}

export default SubscriptorCard