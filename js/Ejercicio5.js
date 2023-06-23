// 5. Crea dos arrays de la misma longitud y una función que cree 
// un nuevo array que intercale sus elementos y vacíe los arrays originales. 
// Por ejemplo, con los arrays arrayUno = [1, 2, 3] y 
// arrayDos = [4, 5, 6] el resultado debería ser [1, 4, 2, 5, 3, 6]

// Creamos los 3 arrays necesarios. Los 2 que nos darán los valores y el 
// que los recibirá
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let arrayUnion = [];

// Creamos la función para unir los arrays. El for hace lo mismo, pero en
// los diferentes arrays que recibe
const unirArrays = (numeros1, numeros2) => {
    // Aquí recorro el primer array
    for (let i = 0; i < numeros1.length; i++) {
        // Y gracias a la función shift, recojo el primer elemento del array,
        // lo elimino del anterior y lo muevo al nuevo gracias al concat
        arrayUnion = arrayUnion.concat(numeros1.shift());
    }
        // Como en este punto, sé que he recorrido todo el array y lo he vaciado
        // hasta el último valor, que el shift no es capaz de sacar, utilizo pop
    arrayUnion = arrayUnion.concat(numeros1.pop());
    // Igual que en el anterior for, pero recorro el segundo array
    for (let i = 0; i < numeros2.length; i++) {
        // En este punto, el arrayUnion ya contiene los valores del anterior
        // Y aquí seguiremos metiéndole valores de la misma manera que
        // en el anterior. Mismo método.
        arrayUnion = arrayUnion.concat(numeros2.shift());
    }
    // También sabemos que, en este punto, sólo queda el último valor
    // y lo extraemos con pop
    arrayUnion = arrayUnion.concat(numeros2.pop());
    // Mostramos el array que une todo y los dos vacíos
    console.log("La cadena unida queda de la siguiente manera "+arrayUnion);
    console.log("Los arrays que traían la información han quedado así: "+array1+" "+array2);
}

unirArrays(array1, array2);