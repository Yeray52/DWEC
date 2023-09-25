let numero = prompt("Introduce número a sumar")
let suma = 0

while (numero != 0){
    suma = parseFloat(suma) + parseFloat(numero)
    numero = prompt("Introduce número a sumar")
    }

alert("La suma de los números es " + suma)