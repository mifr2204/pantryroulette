//Modul export - Hämtar lista över maträtter via api
export async function getFood() {

    const apikey = '&apiKey=123c9d35b1014e16a9c47bf62e7cad6e';
    let fe = await fetch('https://api.spoonacular.com/recipes/complexSearch?includeIngredients=' + ListToSearch() + apikey);
    let data = await fe.json();

    return data;
};

//Modul export - Hämtar slumpmässig maträtt via api
export async function getFoodR() {

    const apikey = '&apiKey=123c9d35b1014e16a9c47bf62e7cad6e';
    let fe = await fetch('https://api.spoonacular.com/recipes/complexSearch?includeIngredients=' + ListToSearchRoulette() + apikey);
    let data = await fe.json();

    return data;
};

//skapar sträng över argument parametrar för api anrop
function ListToSearch(){
    let result = '';
    let ingArray = localStorage.getItem('ings') ?
    JSON.parse(localStorage.getItem('ings')) : [];

    for (let i = 0; i < ingArray.length; i++) {
        if (i != 0) {
            result = result + ',+';    
        }
        result = result + ingArray[i];
    }

    result = result + '&number=5&sort=random&addRecipeInformation=true';
    return result;
    
}

//skapar sträng över argument parametrar för api anrop
function ListToSearchRoulette(){
    let result = '';
    let ingArray = localStorage.getItem('ings') ?
    JSON.parse(localStorage.getItem('ings')) : [];

    for (let i = 0; i < ingArray.length; i++) {
        if (i != 0) {
            result = result + ',+';    
        }
        result = result + ingArray[i];
    }

    result = result + '&number=1&sort=random&addRecipeInformation=true';
    return result;

}
