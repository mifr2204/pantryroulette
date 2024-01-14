//Importera 
import { ingredientsPrint, steps } from "./dish.js";
import { dname } from "./dish.js";

//skriver ut maträtter
export function printFood(data) {
    let disharray = data.results;
    disharray.forEach((dish) => {
        dname(dish);
        ingredientsPrint(dish);
        steps(dish);
    });
};    

