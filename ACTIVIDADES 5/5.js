let nombre = prompt("Introduce tu nombre")
let apellidos = prompt("Introduce tus apellidos")
let salario = parseFloat(prompt("Introduce tu salario"))
let edad = Number(prompt("Introduce tu edad"))
let aumento, salarioExtra


if(salario >= 1000 && salario <= 2000)
{
    if(edad > 45){
        aumento = 3
    }
    else if(edad <= 45){
        aumento = 10
    }
}
else if(salario < 1000)
{
    if(edad < 30){
        salario = 1100
        aumento = 0
    }
    else if(edad >= 30 && edad <= 45){
        aumento = 3
    }
    else if(edad > 45){
        aumento = 15
    }
}
else if(salario > 2000)
{
    aumento = 0
}

salarioExtra = (aumento / 100) * salario

alert("Hola, " + nombre + " " + apellidos + ", tu salario final es de " + (salario + salarioExtra) + " euros")