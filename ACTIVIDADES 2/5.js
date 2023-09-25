let cadenaFinal
let numero = prompt("Introduce un número")

if (numero % 2 == 0){
    cadenaFinal = ", es par"
    }
else{
    cadenaFinal = ", es impar"
    }

if (numero % 3 == 0){
    cadenaFinal = cadenaFinal + ", es múltiplo de 3"
}

if (numero % 5 == 0){
    cadenaFinal = cadenaFinal + ", es múltiplo de 5"
}

alert(numero + cadenaFinal)