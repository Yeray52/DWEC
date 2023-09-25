let numero1 = prompt("Introduce el primer número")
let numero2 = prompt("Introduce el segundo número")

let operacion = prompt("Introduce la operación +, -, * o /")
let numeroFinal

if (operacion == "+"){
    numeroFinal = parseFloat(numero1) + parseFloat(numero2)
    }
    else if (operacion == "-"){
        numeroFinal = parseFloat(numero1) - (numero2)
        }
        else if (operacion == "*"){
            numeroFinal = parseFloat(numero1) * (numero2)
            }
            else if (operacion == "/"){
                numeroFinal = parseFloat(numero1) / (numero2)
                }
else{
    numeroFinal = "Has puesto una operación no válida"
    }

alert(numeroFinal)
