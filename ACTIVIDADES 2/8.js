let texto = "Los números pares entre 25 y 1 son: "

for (i = 25; i>0; i--){
    if (i % 2 == 0){
        texto = texto + Number(i) + " "
    }
    }

alert(texto)
