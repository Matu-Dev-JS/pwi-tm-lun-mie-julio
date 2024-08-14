
/* arrays, objetos, funciones  = CONST */
/* string, null, number, boolean = LET */


/* Crear una persona */

/* 
//Objeto literal
const persona = {
    'nombre': 'pepe',
    'apellido': 'suarez',
    'edad': 30,
    'nro telefono': '12313213',
    'amigo': {
        'nombre': 'maria',
        'edad': 35,
        'numeros preferidos': [3, 7, 4]
    }
}

//NOTACION DE CORCHETES

console.log(persona['nombre'])
console.log(persona['nro telefono'])
console.log(persona['amigo']['nombre'])
console.log(persona['amigo']['numeros preferidos'][1]) 
*/



/* const persona = {
    'nombre': 'pepe',
    'apellido': 'suarez',
    'edad': 30,
    'nroTelefono': '12313213',
    'amigo': {
        'nombre': 'maria',
        'edad': 35,
        'numeros preferidos': [3, 7, 4]
    }
}

//NOTACION DE PUNTOS

console.log(persona.nombre)
console.log(persona.nroTelefono)
console.log(persona.amigo.nombre)
console.log(persona.amigo["numeros preferidos"][1]) */



/* const persona = {
    'nombre': 'pepe',
    'apellido': 'suarez',
    'edad': 30,
    'nroTelefono': '12313213',
    'amigo': {
        'nombre': 'maria',
        'edad': 35,
        'numeros preferidos': [3, 7, 4]
    }
}
persona.abuela = 'marta'

let propiedadAModificar = prompt('decime que queres modificar')
let nuevoValor = prompt('ingresa el nuevo')
persona[propiedadAModificar] = nuevoValor

console.log(persona) */


/* const persona = {
    nombre: 'pepe',
    apellido: 'suarez',
    edad: 30,
    nroTelefono: '12313213',
    amigo: {
        nombre: 'maria',
        edad: 35,
        'numeros preferidos': [3, 7, 4]
    }
} */

//FOR IN

/* for(let propiedad in persona){
    console.log('el valor de la propiedad: ' + propiedad + ' es ' + persona[propiedad])

} */

/* 
const formularioLogin = {
    'username': {
        tipo: 'text',
        placeholder: 'ingresa un nombre',
        label: 'Ingresa el nombre:'
    },
    'email': {
        tipo: 'email',
        placeholder: 'Ingresa tu email',
        label: 'Ingresa el email:'
    },
    'password': {
        tipo: 'password',
        placeholder: 'ingresa la contraseña',
        label: 'Ingresa la contraseña:'
    }   
}

let formulario = ''

for( let propiedad in formularioLogin ){
    //Template string
    formulario = formulario + `
    <label class='label'>${formularioLogin[propiedad].label}</label>
    <input type="${formularioLogin[propiedad].tipo}" placeholder="${formularioLogin[propiedad].placeholder}">
    `
}

document.write(formulario) */


/* let nombre = 'pepe'

console.log(`hola ${nombre}`) */

//ARRAY DE OBJETOS

const productos = [
    {
        nombre: 'tv samsung',
        id: 1, 
        descripcion: 'lorem',
        precio: 10
    },
    {
        nombre: 'tv LG',
        id: 2, 
        descripcion: 'lorem',
        precio: 15
    },
    {
        nombre: 'tv noblex',
        id: 3, 
        descripcion: 'lorem',
        precio: 7
    }
]

/* console.log(productos[1]) */


for(let producto of productos ){
    console.log(`El producto con id ${producto.id} se llama ${producto.nombre}`)
}