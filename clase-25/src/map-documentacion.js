const contactos =  ['pepe', 'maria', 'juan', 'pedro']
  
//Transformar el array de contactos en un array asi: ['<div>pepe</div>', '<div>maria</div>']

//Para estos problemas se suele usar map
//MAP ES UN METODO AVANZADO DE ARRAYS QUE NOS PERMITE TRANSFORMAR UN ARRAY EN OTRO ARRAY'
//Map devolvera siempre un array, donde cada elemento sera el retorno de la callback

//IMPORTANTE
//Devuelve SIEMPRE un array
//La longitud del array que devuelve map siempre es la MISMA que el array a recorrer
//El retorno de la callback me dice que valor tendra cada elemento

const listaContactosHTML = contactos.map((contacto, indice, listaOriginal) => {
    return '<div>' + Number(indice + 1) + ') ' + contacto + '</div>'
})

console.log(listaContactosHTML)