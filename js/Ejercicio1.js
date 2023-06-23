// 1. Dado el array ["A", "B", "C", "D", "E", "F", "G", "H", "I"] 
// crea una función que saque por consola la longitud del array. 
// Crea otra función que obtenga un elemento aleatorio del array y 
// lo saque por consola.

// Creamos el array con sus valoras ya predefinidos
let letras = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

// Aquí la función que muestra por consola la longitud del array anterior
const longitudArray = (arrayLetras) => {
    console.log(arrayLetras.length);
}

// Aquí la funonsión que muestra un valor aleatorio del array
const elementoAleatorio = (arrayLetras) => {
    
    // Creamos una variable para almacenar un número random dentro del
    // rango del array letras. El floor redondea a la baja el número
    // decimal entre 0 y 1 que math.random nos da
    let random = Math.floor(Math.random()*letras.length);
    // Mostramos el valor del array en la posición del número random
    console.log(letras[random]);
}

// Hacemos la llamada a las dos funciones para que se muestren los resultados
longitudArray(letras);
elementoAleatorio(letras);