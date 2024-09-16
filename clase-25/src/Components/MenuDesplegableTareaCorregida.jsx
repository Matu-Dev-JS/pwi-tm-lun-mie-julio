/* Desarrollar un componente llamado MenuDesplegable
Ese componente tendra un estado llamado menuAbierto que empezara en true
El componente tendra un evento onClick que cuando lo llame, cambie el valor de menuAbierto a su opuesto
Si el menuAbierto es true, se debera mostrar un div con una serie de botones como se ve en la imagen. */

import React, { useState } from 'react'


const MenuDesplegable = () => {

    const [menuAbierto, setMenuAbierto] = useState(true)

    const toggleMenu = () => {
      
        setMenuAbierto(!menuAbierto);
    };

    return (
        <div>
            <button onClick={toggleMenu}>
                {menuAbierto ? 'Cerrar': 'Abrir'}
            </button>
            {/* Si el menu está abierto, muestra el div con botones */}
            {menuAbierto && (
                <div>
                    <button>Botón 1</button>
                    <button>Botón 2</button>
                    <button>Botón 3</button>
                </div>
            )}
        </div>
    )
}

export default MenuDesplegable