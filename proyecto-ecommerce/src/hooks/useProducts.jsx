import { useEffect, useState } from "react"
import solicitarProductos from "../fetching/productsFetching"

//Custom Hook useProducts que maneja la logica de estados de producto
const useProducts = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [products, setProducts] = useState(null)

    //getProducts es la funcion de determina que haremos una vez obtuvimos los productos
    const getProducts = async () => {
        const productos = await solicitarProductos()
        setIsLoading(false)
        setProducts(productos)
    }
    //Necesito que getProducts se ejecute solo una vez
    //Queremos CONTROLAR la recarga de mi funcion

    //primer parametro = accion a controlar
    //segundo parametro = lista de dependencias (si es [] significa que funcion solo se ejecutara una vez)
    //REGLA: el primer parametro no puede ser asincronico
    useEffect(() => {
        setTimeout(() => {
            getProducts()
        }, 3000)

    }, [])

    //Objeto con valores del estado
    return {
        isLoading: isLoading,
        products: products
    }
}

export default useProducts