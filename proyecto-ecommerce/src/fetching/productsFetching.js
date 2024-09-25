//solicitar productos funcion encargada de hacer el fetch
//Al poner async decimos que nuesta funcion va a resolver codigo asincronico y retornara una promesa
const solicitarProductos = async () => {
    const URL_API_PRODUCTS = 'http://localhost:5173/data/products.json'

    const respuestaHttp = await fetch(URL_API_PRODUCTS,
        {
            method: 'GET'
        }
    )
    const resultado = await respuestaHttp.json()
    return resultado
}

/* Crear una funcion asincronica que reciba un id, haga un fetch 'http://localhost:5173/data/products.json' y de los productos que devuelva el fetch, buscar a el producto que su id sea igual al id recibido

COINSIDERACIONES
fetch devuelve una promesa
.json devuelve una promesa
array.find() metodo avanzado para buscar un elemento
*/

export const obtenerProductoPorId = async (id) => {
    const URL_API_PRODUCTS = 'http://localhost:5173/data/products.json'

    const respuestaHttp = await fetch(URL_API_PRODUCTS,
        {
            method: 'GET'
        }
    )
    const productos = await respuestaHttp.json()

    const productoEncontrado = productos.find((producto) => {
        return producto.id === id
    });
    console.log(productoEncontrado)
    return productoEncontrado
}



export default solicitarProductos