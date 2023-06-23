// 3. Dado el array javascript1 = ["DOM", "BOM", "Funciones", "Arrays"], elimina "DOM" del
// array. Añade en su lugar el elemento "Objetos". Elimina el elemento "Arrays". Añade en
// su lugar el elemento "ArraysDifíciles". Haz una copia del array que solo incluya los
// últimos dos elementos. Obtén el índice del elemento "Funciones".

let javascript1 = ["DOM", "BOM", "Funciones", "Arrays"];

// Buscamos la posición de la palabra "DOM"
let posicion1 = javascript1.indexOf("DOM");
// Y la sobreescribimos con "Objetos";
javascript1[posicion1] = "Objetos";
console.log("El array queda de la siguiente forma: "+javascript1);

// Buscamos la posición de la palabra "Arrays"
let posicion2 = javascript1.indexOf("Arrays");
// La sobreescribimos con "ArraysDifíciles"
javascript1[posicion2] = "ArraysDifíciles";
console.log("El array se ha actualizado y ha quedado de la siguiente forma: "+javascript1);

// Con la función slice y el -2 indicamos que queremos coger los dos últimos valores
// del array indicado
let copia_javascript1 = javascript1.slice(-2);
console.log("Los 2 últimos valores del array javascript1 son "+copia_javascript1);

// Almacenamos el índice del elemento "Funciones"
let indiceFunciones = javascript1.indexOf("Funciones");
console.log("El índice de la palabra \Funciones\" es: "+indiceFunciones);