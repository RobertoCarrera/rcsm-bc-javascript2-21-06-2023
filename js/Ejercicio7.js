// 7. Utilizando el array del ejercicio anterior, crea una 
// función que saque por consola únicamente los números mayores que 5.

// Reutilizo la creación de los 10 random del ejercicio anterior
let randomNumbers = [];

for (let i = 0; i < 10; i++) {
    
    randomNumbers[i] = Math.floor(Math.random()*10)+1;
}

const searchBiggerThan5 = (arrayNumbers) => {

    console.log("De "+randomNumbers+" los números mayores que 5 son: \n");
    // Recorro el array completo
    for (let i = 0; i < arrayNumbers.length; i++) {
        // Cada número que es mayor de 5, lo imprimo
        if (arrayNumbers[i] > 5) {
            
            console.log(arrayNumbers[i]);
        }
    }
}
// Llamo a la función
searchBiggerThan5(randomNumbers);