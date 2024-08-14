/* 1)
Crear una funcion que reciba un array de letras y se encargue de devolver un string con todas las letras concatenadas
Ejemplo:
concatenar(['a', 'b', 'c'])
devolvera 'abc'
2)
Crear una funcion que reciba un array de numeros y devuelva el mayor de todos
Ejemplo:
mayor([2, 3, 4, 5, 6])
devolvera 6
3)
Crear una funcion llamada calcular, que reciba una operacion (la cual puede ser '+', '-', '*', '/') y dos numeros y devuelva el resultado de la operacion
Ejemplo:
calcular('+', 2, 3)
devolvera 5 */

//1)
//array de letras
/* function concatenarCaracteres(caracteres ){
    //es el acumulador
    let concatenador =""
    //iterando el array / recorriendo el array
    for (let i =0; i< caracteres.length; i=i+1){
    
        concatenador=concatenador + caracteres[i]
    }
    //Forma 2 un poquito mas practica
    
    // for(let caracter of caracteres){
    //     concatenador = concatenador + caracter
    // }

    return (concatenador) //string
}

console.log (concatenarCaracteres ( ["a","b","c","d"] )) */


//2)


/* const numeros = [1,2,10,1000,15,345] */


/* //array numerico
function devolverMayor( numeros ) {
    let mayor = 0
    //recorro el array de numeros
    for(let num of numeros){
        //si num es mayor a valor de la variable 'mayor'
        if (num > mayor) {
            mayor = num
        }
        
    }
    return mayor
}


console.log(devolverMayor(numeros))
console.log(devolverMayor([1, 2, 3])) */


// 3)
/* function calcular(operacion, nro1, nro2){
    if (operacion === '+'){
        return (nro1 + nro2)
    }
    else if (operacion === '-'){
        return (nro1 - nro2)
    }
    else if (operacion === '*'){
        return (nro1 * nro2)
    }
    else if (operacion === '/'){
        return (nro1 / nro2)
    }
    else{
        return 'Reintente'
    }
}

let operacion = 'pepe'
let nro1 = 5
let nro2 = 5

let resultado = calcular(operacion, nro1, nro2)
console.log(resultado) */


/* function mayor(numeros) {
    let numeroMayor = 0
    for(let i = 0; i < numeros.length; i = i + 1){
        if(numeros[i] > numeroMayor){
            numeroMayor = numeros[i]
        }
    }
    
    return numeroMayor
}

console.log(mayor([1, 100, 4, 1])) */


