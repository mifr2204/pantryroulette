import { ingredientsPrint, steps } from "./dish.js";
import { dname } from "./dish.js";
export function printFood(data) {
    dname(data);
    ingredientsPrint(data);
    steps(data);
};    

