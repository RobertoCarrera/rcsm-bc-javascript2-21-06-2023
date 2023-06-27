// 6. Crea un array con al menos 10 números y una función que los 
// divida en otros dos arrays: uno para pares y otro para impares. 
// A continuación, saca por consola ambos arrays resultantes concatenados.

let numbers = [];

// Genero un array de 10 números entre el 1 y el 50
for (let i = 0; i < 10; i++) {
    
    numbers[i] = Math.floor(Math.random()*50)+1
}
// Lo muestro para que luego se vea la diferencia con la concatenación
console.log("Aquí el array aleatoriamente generado: "+numbers);
// Aquí la función que los separa y concatena. Recibe un array
const separateNumbers = (newArray) => {
// Creo un array para cada uno de los números: pares e impares
    let oddNumbers = [];
    let evenNumbers = [];
// Recorro el array que recibe la función
    for (let i = 0; i < newArray.length; i++) {
        // Si son pares, los pusheo en un array de pares
        if (newArray[i]%2 == 0) {
            
            evenNumbers.push(newArray[i]);
            // Y sino, en el de impares
        }else{

            oddNumbers.push(newArray[i]);
        }
    }
    // Aquí muestro, por consola, los arrays concatenados
    console.log("Aquí los arrays separados :"+evenNumbers.concat(oddNumbers));
}

separateNumbers(numbers);