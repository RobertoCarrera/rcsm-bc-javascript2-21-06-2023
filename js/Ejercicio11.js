// 11. Utiliza el objeto del ejercicio anterior y mediante 
// desestructuración accede únicamente a tres de esas propiedades.

// Copio el objeto persona del ejercico anterior
let person = {
    // Con sus mismas claves y valores
    name: "Roberto",
    surname: "Carrera Santa Maria",
    age: 30,
    address: "C/ Mi casa 35, 2º1ª",
    city: "Barcelona",
    country: "Catalunya"
};
// Creo una función que recibe el objeto entero
const threeProperties = (objectPerson) => {
// Creo 3 variables que almacenarán las 3 propiedades a las que quiero acceder
    let ageObject = objectPerson.age
    let cityObject = objectPerson.city
    let countryObject = objectPerson.country;
// Y las muestro por consola
    console.log(ageObject, cityObject, countryObject);
}

threeProperties(person);