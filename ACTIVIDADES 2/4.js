let mes = prompt("Introduce el día del mes")
let mensaje

switch (mes){
    case "4":
    case "6":
    case "9":
    case "11":
    alert ("El mes tiene 30 días")
    break;
    case "1":
    case "3":
    case "5":
    case "7":
    case "8":
    case "10":
    case "12":
    alert ("El mes tiene 31 días")
    break;
    case "2":
    alert ("El mes tiene 29 días")
    break;
    default:
    alert ("No existe ese mes")
    }
