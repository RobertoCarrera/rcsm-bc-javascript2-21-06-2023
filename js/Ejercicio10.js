// 10. Crea un objeto que almacene los datos de una persona 
// (nombre, apellidos, edad, dirección, ciudad, país... y lo que quieras). 
// Crea una función que saque por consola el nombre completo (nombre y apellidos) 
// de la persona a modo de string.

// Creamos un objeto persona
let person = {
    // Con todos sus clave: valor
    name: "Roberto",
    surname: "Carrera Santa Maria",
    age: 30,
    address: "C/ Mi casa 35, 2º1ª",
    city: "Barcelona",
    country: "Catalunya"
};
// Creamos la función que recibe el objeto
const fullName = (personObject) => {

// Y que sólo muestra el nombre y apellidos del objeto recibido, concatenados
    let completeName = personObject.name.concat(" "+personObject.surname);

    console.log(completeName);
}

fullName(person);