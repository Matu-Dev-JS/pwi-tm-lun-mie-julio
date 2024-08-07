let numero_1 = prompt("Ingrese el primer número")
while( !numero_1 || isNaN(numero_1)){
    
    alert("El valor ingresado no es un número")
    numero_1 = prompt("Ingrese el primer número nuevamente")
}

let numero_2 = prompt("Ingrese el segundo número")
while(!numero_2 || isNaN(numero_2)  ){

    alert("El valor ingresado no es un número")
    numero_2 = prompt("Ingrese el segundo número nuevamente")
}

let operador = prompt('Ingrese una operacion (+, -, *, /)')
while(operador !== "+" && operador !== "-" && operador !== "*" && operador !== "/"){

    alert("Solicitud no válida")
    operador = prompt("Ingrese la operación que desea realizar nuevamente: (+, -, *, /)")
}

numero_1 = Number(numero_1)
numero_2 = Number(numero_2)

let resultado = null
if (operador === "+") {

    resultado = numero_1 + numero_2
	alert('El resultado de ' + numero_1 + ' ' + operador + '  ' + numero_2 + ' es :  ' + resultado) 
} else if (operador === "-") {

    resultado = numero_1 - numero_2
	alert('El resultado de ' + numero_1 + ' ' + operador + '  ' + numero_2 + ' es :  ' + (numero_1 - numero_2)) 
} else if (operador === "*") {

    resultado = numero_1 * numero_2
	alert('El resultado de ' + numero_1 + ' ' + operador + '  ' + numero_2 + ' es :  ' + (numero_1 * numero_2))
} else {

    resultado = numero_1 / numero_2
	alert('El resultado de ' + numero_1 + ' ' + operador + '  ' + numero_2 + ' es :  ' + (numero_1 / numero_2)) 
}

console.log(resultado)