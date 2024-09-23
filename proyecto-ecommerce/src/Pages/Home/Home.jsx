import React, { useEffect, useState } from 'react'
import { Footer, Header } from '../../Components'
import useProducts from '../../hooks/useProducts'



//Consumir la api JSON PLACEHOLDER
const solicitarDatos = async () => {
  const respuestaHttp = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const resultado = await respuestaHttp.json()
  console.log(resultado)
}



const Home = () => {
  const objeto = useProducts()
  console.log(objeto)

  /* solicitarProductos() */
  //setTimeout es una funcion nativa de JS que recibe una callback y un numero
  //callback = accion a ejecutar
  //numero = duracion de el atraso en milisegundos
  /* 
  setTimeout(
    () => {

      console.log(resultado)
    },
    3000
  ) */
  return (
    <>
        <Header/>
        <main>
            {
              objeto.isLoading
              ? <h2>Cargando</h2>
              : <div>
                {objeto.products.map( 
                  (producto)=>{
                    return (
                      <div key={producto.id}>
                        <h3>{producto.title}</h3>
                        <img src="" alt="" />
                        <span>Precio: ${producto.price}</span>
                      </div>
                    )
                  } 
                )}
              </div>
            }
        </main>
        
    </>
  )
}

export default Home