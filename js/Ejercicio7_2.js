// 7. Utilizando el array del ejercicio anterior, crea una función 
// que saque por consola únicamente los números mayores que 5.

let numbers = [];

// Copio el array del ejercicio anterior para generar, otra vez,
// 10 números aleatorios. Lo cambio para que sean del 1-10
for (let i = 0; i < 10; i++) {
    
    numbers[i] = Math.floor(Math.random()*10)+1
}
// Muestro el array completo para luego ver los mayores de 5 separados
console.log("Array completo: "+numbers)
console.log("Números mayores de 5: "+numbers)
// Creo la función para mostrar los mayores 5. Recibe un array
const showHigherThan5 = (newArray) => {
// Recorro todo el array recibido
    for (let i = 0; i < numbers.length; i++) {
        // Si el valor del array es mayor de 5, lo muestro
        if (numbers[i]>5) {

            console.log(numbers[i]);    
        }
    }
}

showHigherThan5(numbers);