import React from 'react'



function App() {
  
  const saludar = ( ) => {
    alert('hola')
  }
  return (
    <div>
      <button onClick={saludar}>Hola</button>
      <Titulo/>
      <Titulo/>
      <Titulo/>
    </div>
  )
}
/* 
COMPONENTES
-Las funciones que devuelven HTML (o mejor dicho JSX) las llamaremos COMPONENTES 
-Los componentes deben ser llamados en mayuscula
-Los componentes pueden ser creados con function o arrow function
-Para retornar JSX (html) se recomienda poner return( salto de linea ) | aclaracion: return con parentesis
-Para usar el componente debemos llamarlo donde lo queramos usar pero como si fuera una etiqueta de HTML
*/

const Titulo = () =>{
  let nombre = 'pepe'
  return (
    <h1>Hola me llamo {nombre}</h1>
  )
}


export default App
