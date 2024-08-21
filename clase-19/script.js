/* Callback */

/* es una funcion pasada por parametro */



/* const saludar = (nombre) => {
    alert("Hola " + nombre)
}


const solicitarDato = (mensaje, errorMensaje, validacion) => {
    let dato = prompt(mensaje)
    while( !validacion(dato) ){
        dato = prompt(errorMensaje)
    }
    return dato
} 


const validacionNombre = (valor) => {
    return Boolean(valor && isNaN(valor) && !valor.includes('*'))
}

const validacionEdad = (valor) => {
    return Boolean(valor && !isNaN(valor))
}



let nombre = solicitarDato(
    'Ingrese el nombre', 
    'Error al ingresar nombre, recuerda que no se permiten numeros o asteriscos',
    validacionNombre
)

let nombreEmpresa = solicitarDato(
    'Ingrese el nombre de su empresa', 
    'Error al ingresar el nombre de la empresa',
    validacionNombre
)

let edad = solicitarDato(
    'Ingrese su edad',
    'Error al ingresar la edad',
    validacionEdad
) */

/* saludar(nombre) */

//Quiero solicitar nombre de la empresa


const productos = [
    {
        nombre: 'TV samsung',
        precio: 12000,
        id: 1
    },
    {
        nombre: 'TV LG',
        precio: 10000,
        id: 2
    },
    {
        nombre: 'TV Noblex',
        precio: 8000,
        id: 3
    },
    {
        nombre: 'Celular Noblex',
        precio: 4000,
        id: 4
    },
    {
        nombre: 'Celular Samsung',
        precio: 6000,
        id: 5
    }
]

const personas = [
    {
        nombre: 'pepe',
        edad: 30
    },
    {
        nombre: 'pedro',
        edad: 35
    },
    {
        nombre: 'maria',
        edad: 50
    }

] 


const filtrarMayoresA = (productos, limite) => {
    const productosMayorA = []
    for(const producto of productos){
        if(producto.precio > limite){
            productosMayorA.push(producto)
        }
    }
    return productosMayorA
}


const filtrarPorNombre = (productos, stringBuscado) => {
    const resultado = []

    for(let producto of productos){
        if(producto.nombre.includes(stringBuscado)){
            resultado.push(producto)
        }
    }
    return resultado
}


const filtrar = (array, condicion) => {
    const resultado = []
    for(const elemento of array){
        if(condicion(elemento)){
            resultado.push(elemento)
        }
    }
    return resultado
}


/* 
const filtroPorNombre = (producto) => producto.nombre.includes('TV')
const filtroPorPrecio = (producto) => producto.precio > 10000
 */





/* console.log(filtrar(productos, (producto) => producto.nombre.includes('TV')))
console.log(filtrar(productos, (producto) => producto.precio > 10000))

console.log(filtrar(personas, (persona) => persona.edad > 32)) */
/* 
console.log(filtrarMayoresA(productos, 7000))

console.log(filtrarPorNombre(productos, 'Celular')) */


/* METODOS AVANZADOS DE ARRAYS */

//FILTER: Siempre retorna un array, el array estara compuesto por los elementos que hayan cumplido con la callback
/* const resultado = productos.filter(
    (producto) => {
        return producto.nombre.includes('TV') 
    }
)

const resultado_3 = productos.filter( producto => producto.nombre.includes('TV') )

const resultado_2 = productos.filter(
    function(producto){
        return producto.nombre.includes('TV') 
    }
) 

console.log(resultado) */


//forEach: recibe una callback y POR CADA elemento ejecuta la callback, NO RETORNA NADA (Undefined)

/* 
const resultado = productos.forEach(
    (producto) => {
        console.log('hola ' + producto.nombre)
    }
)

console.log(resultado) */

//find: recibe una callback y por cada elemento verificara si al pasarlo por la callback devuelve verdadero, cuando devuelva verdadero la callback, find retornara ese elemento, SI NADIE CUMPLE CON LA CONDICION ENTONCES RETORNA UNDEFINED

/* const resultado = personas.find((persona) => {
        return persona.nombre === 'pepe'
    }
)
const producto_1 = productos.find(producto => producto.id === 1)

const producto_70 = productos.find(producto => producto.id === 70)

console.log(producto_70)

[
    {
        seller_id: 1,
        nombre: 'casa 1',
        id: 1
    },
    {
        seller_id: 1,
        nombre: 'casa 2',
        id: 2
    }Busca en Google o escribe una URL
    
    
] */

//findIndex: recibe una callback y por cada elemento verificara si al pasarlo por la callback devuelve verdadero, cuando devuelva verdadero la callback, find retornara la posicion, SI NADIE CUMPLE CON LA CONDICION ENTONCES RETORNA -1


const posicionProducto = productos.findIndex(producto => producto.id === 1)

console.log(posicionProducto)


productos.splice(posicionProducto, 1)

console.log(productos)

/* 
Metodos avanzados que nos faltan:
-map
-some
-every

DOM: Document Object Model
*/