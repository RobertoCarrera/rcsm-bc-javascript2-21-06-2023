// 9. Imagina que estamos en una carrera y los nombres de las personas 
// que van llegando a la meta se van almacenando en un array (el primero 
//     quedaría en la primera posición del array, el segundo en la segunda, etc.). 
//     Crea un array con por lo menos cinco nombres. Desestructura el array utilizando 
//     el operador rest de manera que puedas llamar al ganador, al segundo y al resto 
//     de competidores por separado.

// Creo el array con los ganadores
let winners = ["Miguel", "Fernando", "Oscar", "Maria", "Sofia"];
// Creo la función que recibirá el array anterior
const showWinners = (arrayWinners) => {
    // Creo todas las variables que quiera mostrar y, el resto
    // se mostrarán en el others. A todas les asigno el valor del array.
    //  Él ya entiende que en others va toda la información que no 
    // has almacenado en una variable propia
    let [first, second, ...others] = arrayWinners;
// Imprimo todas las variables creadas y, finalmente, el others
    console.log(first);
    console.log(second);
    console.log(others);
}

showWinners(winners);