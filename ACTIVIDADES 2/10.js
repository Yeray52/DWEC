let numero = Number(prompt("Jugador 1, escribe un número"))
let numAdivinado 
let encontrado = false


while(encontrado == false){
    numAdivinado = Number(prompt("Jugador 2, adivina el número"))
    if(numAdivinado == numero){
        alert("Enhorabuena, has adivinado el número")
        encontrado = true
    }
    else if(numAdivinado > numero){
        alert("Es un número mas bajo, vuelve a intentarlo")
    }
    else if(numAdivinado < numero){
        alert("Es un número mas alto, vuelve a intentarlo")
    }
}

