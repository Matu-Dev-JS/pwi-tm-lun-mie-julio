import React from 'react'
import { Footer, Header } from '../../Components'
import { useParams } from 'react-router-dom'
import { obtenerProductoPorId } from '../../fetching/productsFetching'

const Detail = () => {
  //USE PARAMS NOS TRAERA LOS PARAMETROS DE BUSQUEDA USADOS EN UNA RUTA
  const {product_id} = useParams()
  obtenerProductoPorId(70)
  console.log(product_id)
  return (
    <>
        <Header/>
        <main>
            Contenido de detail
        </main>
        <Footer/>
    </>
  )
}

export default Detail