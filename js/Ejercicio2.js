// 2. Crea un array con los nombres de los planetas del Sistema Solar. 
// Crea una función que los liste y los saque por consola.

// Creamos el array con los nombres de los planetas
let planetas = ["Mercurio", "Venus", "Tierra", "Marte", "Júpiter", 
"Saturno", "Urano", "Neptuno"];

// Creamos la función flecha que muestra los planetas
const listarPlanetas = (arrayPlanetas) => {
    
    // For que recorre el array y muestra su contenido
    
    for (let i = 0; i < arrayPlanetas.length; i++) {
        console.log(arrayPlanetas[i]);
        
    }
}

listarPlanetas(planetas);