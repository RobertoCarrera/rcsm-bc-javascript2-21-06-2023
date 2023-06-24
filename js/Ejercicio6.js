// 6. Crea un array con al menos 10 números y una función que los 
// divida en otros dos arrays: uno para pares y otro para impares. 
// A continuación, saca por consola ambos arrays resultantes concatenados.

// Creo un array en el que almaceno los números a ordenar
let randomNumbers = [];
// Los genero, cada vez, aleatoriamente. 10 diferentes de 1-10
for (let i = 0; i < 10; i++) {
    
    randomNumbers[i] = Math.floor(Math.random()*10)+1;
}

// Aquí empieza la función que los separa
const divideNumbers = (arrayNumbers) => {
// Creo las variables necesarias. 2 arrays que almacenan los números
// Y 2 contadores que son independientes a cada array pq sino crearíamos
// saltos diferentes entre arrays 
    let evenNumbers = [], oddNumbers = [];
    let counterEven = 0, counterOdd = 0;
// Recorremos el array de los números aleatorios
    for (let i = 0; i < arrayNumbers.length; i++) {
        // Si son pares, se van al array de pares y el contador suma 1
        if (arrayNumbers[i] %2 == 0) {
            evenNumbers[counterEven] = arrayNumbers[i];
            counterEven++;
        }
        // Si no lo son, van al de impares y el contador impar suma 1
        else{
            oddNumbers[counterOdd] = arrayNumbers[i];
            counterOdd++;
        }
    }
    // Mostramos los arrays separados
    console.log("Los arrays separados son los siguientes: \nPares "+oddNumbers+" \nImpares: "+evenNumbers);
}
// Llamamos a la función
divideNumbers(randomNumbers);