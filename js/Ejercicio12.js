// 12. Crea un array que contenga al menos tres objetos con las mismas 
// propiedades (al menos tres) y distintos valores. Crea una función que saque 
// por consola el valor de una de las propiedades para todos los objetos.

// Creamos el array de objetos
let people = [
    {
        name: "Roberto",
        surname: "Carrera",
        age: 30
    },
    {
        name: "Miguel",
        surname: "Astuto",
        age: 22
    },
    {
        name: "Sofia",
        surname: "Malgrado",
        age: 35
    }
];
// Creamos la función que mostrará las edades y le pasamos el array de objetos
const showAge = (arrayPeople) => {

    for (let i = 0; i < arrayPeople.length; i++) {
        // Lo conseguimos recorriendo todo el array de objetos e
        // imprimiendo la propiedad que nos interese
        console.log(arrayPeople[i].age);
        
    }
}

showAge(people);