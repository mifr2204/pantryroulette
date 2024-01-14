
export async function getFood() { /*Hämtar data via api */

    const apikey = '&apiKey=123c9d35b1014e16a9c47bf62e7cad6e';
    let fe = await fetch('https://api.spoonacular.com/recipes/complexSearch?includeIngredients=' + ListToSearch() + apikey);
    let data = await fe.json();

    return data;
};

export async function getFoodR() { /*Hämtar data via api */

    const apikey = '&apiKey=123c9d35b1014e16a9c47bf62e7cad6e';
    let fe = await fetch('https://api.spoonacular.com/recipes/complexSearch?includeIngredients=' + ListToSearchRoulette() + apikey);
    let data = await fe.json();

    return data;
};

function ListToSearch(){//ändra i denna för fler sökningar med if
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
function ListToSearchRoulette(){//ändra i denna för fler sökningar med if
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

//result = result + '&number=1&sort=random&addRecipeInformation=true';
//'https://api.spoonacular.com/recipes/complexSearch?&includeIngredients='