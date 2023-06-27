// 8. Dados los arrays javascript1 = ["DOM", "BOM", "Funciones", "Arrays"] 
// y javascript2 = ["Objetos", "Arrays", "ParseInt"], 
// crea una función que determine si se repite algún elemento y lo saque por consola.

let javascript1 = ["DOM", "BOM", "Funciones", "Arrays"];
let javascript2 = ["Objetos", "Arrays", "ParseInt"];

const searchRepeated = (array1, array2) => {

    console.log("En los arrays: "+array1+" y "+array2+" se repiten las palabras: ");
    // El primer for recorrerá un array
    for (let i = 0; i < array1.length; i++) {
        // Y el segundo, el otro array. No importa cuál va primero porque cada uno
        // controla su propio tamaño.
        for (let j = 0; j < array2.length; j++) {
            // Recorreremos todas las posiciones de ambos arrays y compararemos para encontrar
            // repeticiones de elementos
            if(array1[i] == array2[j])
            {
                // Si los encuentra, los imprime
                console.log(array2[j]);
            }
        }
    }
}

searchRepeated(javascript1,javascript2);