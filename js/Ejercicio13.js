// 13. Crea un objeto que contenga una receta de cocina, con propiedades asignadas a su nombre, 
// tiempo de preparación e ingredientes. Haz una función que saque por consola el nombre, el 
// tiempo y una lista de los ingredientes.

// Creo el objeto
let recipe = {
    name: "Alcachofas con lacón",
    time: "30 mins",
    // Los ingredientes serán un array
    ingredients: ["alcachofas", "lacon", "aceite de oliva", "medio ajo"]
};
// Creo la función que mostrará la receta
const showRecipe = (object) => {

    console.log(recipe.name);
    console.log("Tiempo de preparación: "+recipe.time);
    console.log("Ingredientes: "+recipe.ingredients);
}

showRecipe(recipe);