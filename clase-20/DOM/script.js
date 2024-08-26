//DOM = DOCUMENT OBJECT MODEL
/* 
Una representacion como OBJETO de nuestro HTML

document es una variable global que representa mi DOM, se crea cuando conecte mi script a HTML
*/


console.dir(document)

//getElementById le pasamos un id y devuelve un elementoHTML (objeto) o si lo encuentra devuelve null

const titulo = document.getElementById('titulo')

console.log(titulo.innerText)

console.dir(titulo)

titulo.innerText = 'pepe'

const caja = document.getElementById('caja')



/* const productos = [
    'tv samsung', 
    'celular TCL', 
    'Iphone 13',
    'Teclado',
    'Mate'
]
 */

const productos = [
    {
        nombre: 'Tv samsung',
        precio: 3000,
        id: 1,
        stock: 3,
        descripcion: 'lorem ipsum',
        thumbnail: 'https://tiendadiggit.com.ar/web/image/product.product/3637/image_128/%5BUN32T4300AGCZB%5D%20Smart%20TV%20Samsung%2032%22%20EQ%20HD%20%20%20%20%20%20%20%20?unique=ef593ca'
    },
    {
        nombre: 'Celular TCL',
        precio: 300,
        id: 2,
        stock: 30,
        descripcion: 'lorem ipsum',
        thumbnail: 'https://tiendadiggit.com.ar/web/image/product.product/3637/image_128/%5BUN32T4300AGCZB%5D%20Smart%20TV%20Samsung%2032%22%20EQ%20HD%20%20%20%20%20%20%20%20?unique=ef593ca'
    },
    {
        nombre: 'Iphone 13',
        precio: 1200,
        id: 3,
        stock: 6,
        descripcion: 'lorem ipsum',
        thumbnail: 'https://tiendadiggit.com.ar/web/image/product.product/3637/image_128/%5BUN32T4300AGCZB%5D%20Smart%20TV%20Samsung%2032%22%20EQ%20HD%20%20%20%20%20%20%20%20?unique=ef593ca'
    }
]

//Inicialmente el innerHTML de caja es un ''

for(let producto of productos){
    caja.innerHTML = caja.innerHTML + `
    <div class="producto">
        <h2>${producto.nombre}</h2>
        <img src="${producto.thumbnail}" alt="${producto.nombre}">
        <br>
        <span>Precio: $${producto.precio}</span>
        <br>
        <span>Stock Disponible: ${producto.stock}</span>
        <br>
        <button>comprar</button>
        <hr>
    </div>
    `
}