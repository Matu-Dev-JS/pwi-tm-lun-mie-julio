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


export default solicitarProductos