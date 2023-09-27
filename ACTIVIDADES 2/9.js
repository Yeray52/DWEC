let numero = Number(prompt("Introduce el número"))
let multiplicador = 2
let factorial = 1

while (multiplicador <= numero) {
    factorial = factorial *  multiplicador
    multiplicador = multiplicador + 1
}

alert(factorial)