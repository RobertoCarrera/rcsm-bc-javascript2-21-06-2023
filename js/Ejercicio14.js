// 14. Reutiliza la receta del ejercicio anterior y añádela a un array que contenga varias recetas
// similares, con las mismas propiedades. Utiliza también la función del ejercicio anterior y
// saca por consola todas las recetas de tu array.

// Creo el objeto como en el anterior ejercico, pero agrego 2 recetas más
let recipes = [
    {
    name: "Alcachofas con lacón",
    time: "30 mins",
    ingredients: ["Alcachofas", "Lacón", "Aceite de oliva", "Medio ajo"]
    },
    {
    name: "Tortilla de patatas",
    time: "20 mins",
    ingredients: ["Patatas", "Huevos", "Aceite de oliva", "Medio ajo", "Pimienta"]
    },
    {
    name: "Melón con jamón",
    time: "10 mins",
    ingredients: ["Melón", "Jamón"]
    }
];
// Creo la función que mostrará la receta, pero añado un for para recorrer el array de recetas
const showRecipe = (arrayRecipes) => {

    for (let i = 0; i < arrayRecipes.length; i++) {

        console.log(arrayRecipes[i].name);
        console.log("Tiempo de preparación: "+arrayRecipes[i].time);
        console.log("Ingredientes: "+arrayRecipes[i].ingredients);
    }
}

showRecipe(recipes);