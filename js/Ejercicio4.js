// 4. Crea una string, pásala a array y saca por consola la 
// versión invertida de la original. 
// Ejemplo: "Hola" -> [H, o, l, a] -> [a, l, o, H] -> "aloH"

// Pedimos una palabra al usuario
let palabra = prompt("Escribe un texto o palabra cualquiera:");
// Reservamos espacio para la palabra invertida
let palabraInversa;
// Apunte de que un array siempre debe inicializarse con
// las llaves. Sino da error
let palabraArray = [];

// Recorremos la palabra que nos da el usuario caracter a caracter y 
// lo introducimos del revés en la variable creada anteriormente
for (let i = 0; i < palabra.length; i++) {
    let letra = palabra[i];
    palabraArray[i] = palabra[i];
}

// Le damos la vuelta a la palabra en una variable creada
// para almacenarla, gracias a la función reverse
let palabraArrayInversa = palabraArray.reverse();

// Gracias a la función join, unimos el array con la palabra del revés en
// una string
palabraInversa = palabraArrayInversa.join('');
console.log(`La palabra ${palabra}, invertida, es = ${palabraInversa}`);