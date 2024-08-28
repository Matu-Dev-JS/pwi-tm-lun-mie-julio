const nombres  = ['pepe', 'juan', 'jose']

/* 
En base al array de nombres queremos generar un array con elementos HTML escritos como string

[
    '<div>Nombre: pepe</div>',
    '<div>Nombre: juan</div>',
    '<div>Nombre: jose</div>',
]

USAMOS MAP CUANDO BUSCAMOS OBTENER UN ARRAY EN BASE A OTRO ARRAY

MAP:
RETORNA SIEMPRE ARRAY
EL LENGTH DE EL ARRAY RETORNADO SERA IGUAL AL DEL ORIGINAL
El valor que tomara cada elemento del nuevo array sera determinado por el retorno de la callback
*/

//Map por detras tiene un for of
const nombresHTML = nombres.map(
    (nombre) => {
        return `<div>Nombre: ${nombre}</div>`
    }
)

console.log(nombresHTML)

//Me gustaria que el array de nombres ahora sea de objetos, ej:
//const personas = [{nombre: 'pepe'}, {nombre: 'juan'}, {nombre: 'jose'}]


/* 
CASO NO RECOMENDABLE PERO POSIBLE CON FOREACH
const nombresHTML2 = []
nombres.forEach(
    (nombre) => {
        nombresHTML2.push(`<div>Nombre: ${nombre}</div>`)
    }
)
console.log(nombresHTML2) */


//const nombres  = ['pepe', 'juan', 'jose']
/* 
Dado este array de nombres generar este array de objetos (USANDO MAP)
*/

const personas = [
    {nombre: 'pepe'},
    {nombre: 'juan'}, 
    {nombre: 'jose'}
]

console.log(personas[0].nombre)


const carrito = [
    {
        productoId: 1,
        cantidad: 2
    },
    {
        productoId: 2,
        cantidad: 4
    },
    {
        productoId: 3,
        cantidad: 90
    }
]

//Dado este carrito generar otro carrito donde el producto con id 3 tenga su cantidad en 1 menos

//Ejemplo:
/* 
const carrritoMofificado = [
    {
        productoId: 1,
        cantidad: 2
    },
    {
        productoId: 2,
        cantidad: 4
    },
    {
        productoId: 3,
        cantidad: 89
    }
]
 */

/* 
Crear una funcion que se llame quitarProductoDelCarrito que recibira el array de carrito y el id del producto a decrementar
y devolvera un nuevo array con la estructura original del carrito, pero el producto que su id sea igual al id recibido tendra su 
cantidad decrementada en 1

EJEMPLO:

const carrito = [
    {
        productoId: 1,
        cantidad: 2
    },
    {
        productoId: 2,
        cantidad: 4
    },
    {
        productoId: 3,
        cantidad: 90
    }
]

quitarProductoDelCarrito(carrito, 2)

esta funcion devolvera:

[
    {
        productoId: 1,
        cantidad: 2
    },
    {
        productoId: 2,
        cantidad: 3
    },
    {
        productoId: 3,
        cantidad: 90
    }
]

*/


/* const nombres_productos = [
    'tv samsung',
    'tv LG ',
    'licuadora phillips'
]
 */
/* 
[
    {nombre: 'tv samsung'}
]
*/

/* const productos_1 = nombres_productos.map(
    (nombre_producto)=>{
        //Aca creamos el objeto con key nombre y value (el valor de) el parametro nombre_producto
        return {nombre: nombre_producto}
    }
) 

console.log(productos_1)

const carrito_2 = [
    {
        productoId: 1,
        cantidad: 2
    },
    {
        productoId: 2,
        cantidad: 4
    },
    {
        productoId: 3,
        cantidad: 90
    }
]

const carritoHTML3 = carrito_2.map(
    (producto) => {
        if (producto.productoId === 3) {
            producto.cantidad--
        }
        return producto
    }
)
console.log(carritoHTML3); */