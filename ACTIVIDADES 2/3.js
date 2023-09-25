let precio = prompt("Introduce el precio del producto")
let hermanos = prompt("¿Cuántos hermanos tienes?")
let descuento, precioFinal, bonus

if (hermanos >= 3){
    descuento = 15
    }
else if (hermanos > 0){
    descuento = 5
    }
else{
    descuento = 0
    }

bonus = (descuento / 100) * precio
precioFinal = (parseFloat(precio) + parseFloat(bonus))

alert ("El precio final sería " + precioFinal)