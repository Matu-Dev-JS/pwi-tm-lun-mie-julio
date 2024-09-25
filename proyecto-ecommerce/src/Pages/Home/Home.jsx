import React, { useEffect, useState } from 'react'
import { Footer, Header } from '../../Components'
import useProducts from '../../hooks/useProducts'
import { Link } from 'react-router-dom'



//Consumir la api JSON PLACEHOLDER
const solicitarDatos = async () => {
  const respuestaHttp = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const resultado = await respuestaHttp.json()
  console.log(resultado)
}



const Home = () => {
  //Desestructuracion de objeto
  const {isLoading, products} = useProducts()
  


  return (
    <>
        <Header/>
        <main>
            {
              isLoading
              ? <h2>Cargando</h2>
              : <div>
                {products.map( 
                  (producto)=>{
                    return (
                      <div key={producto.id}>
                        <h3>{producto.title}</h3>
                        <img src="" alt="" />
                        <span>Precio: ${producto.price}</span>
                        <Link to={`/product/detail/${producto.id}`}>
                          Ver detalle
                        </Link>
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