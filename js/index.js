import { getFoodR } from "./widget/fetch.js";
import { getFood } from "./widget/fetch.js";
import { printFood } from "./widget/print.js";
let submitbtn = document.getElementById('submitbtn');
let submitbtnR = document.getElementById('submitbtnR');
let menu = document.getElementById('menu');
let nav = document.getElementById('nav');
menu.addEventListener('click', showMenu);
submitbtnR.addEventListener('click', onclick);
submitbtn.addEventListener('click', onclick2);
submitbtnR.addEventListener('click', hideForm);
submitbtn.addEventListener('click', hideForm);
backbtn.addEventListener('click', showForm);

function showMenu() {  
    nav.style.display = "flex";
    console.log("funkar");
};
async function onclick() {
    let data = await getFoodR();
    printFood(data);
    console.log(data);
    return(data);
};
async function onclick2() {
    let data = await getFood();
    printFood(data);
    console.log(data);
    return(data);
};
async function hideForm(){
    let form2 = document.getElementById('form');
    let disches = document.getElementById('disches');
    let back = document.getElementById('backbtn');
    let dishlist = document.getElementById('dishlist');
    
    form2.style.display = 'none';
    disches.style.display= 'block';
    dishlist.style.display='block';
    back.style.display= 'block';
};

async function showForm(){
    let form2 = document.getElementById('form');
    let disches = document.getElementById('disches');
    let back = document.getElementById('backbtn');
    let dishlist = document.getElementById('dishlist');
    
    form2.style.display = 'block';
    disches.style.display= 'none';
    dishlist.style.display='none';
    back.style.display= 'none';
};



/*const APIRESULT = {
    "results": [
        {
            "vegetarian": false,
            "vegan": false,
            "glutenFree": true,
            "dairyFree": true,
            "veryHealthy": false,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "lowFodmap": false,
            "weightWatcherSmartPoints": 25,
            "gaps": "no",
            "preparationMinutes": -1,
            "cookingMinutes": -1,
            "aggregateLikes": 1,
            "healthScore": 21,
            "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
            "license": "CC BY 3.0",
            "sourceName": "Foodista",
            "pricePerServing": 258.29,
            "id": 637103,
            "title": "Caribbean Chicken Thighs",
            "readyInMinutes": 45,
            "servings": 2,
            "sourceUrl": "https://www.foodista.com/recipe/JQ2NJZ7B/caribbean-chicken-thighs",
            "image": "https://spoonacular.com/recipeImages/637103-312x231.jpg",
            "imageType": "jpg",
            "summary": "The recipe Caribbean Chicken Thighs can be made <b>in roughly 45 minutes</b>. One portion of this dish contains around <b>49g of protein</b>, <b>49g of fat</b>, and a total of <b>784 calories</b>. This gluten free and dairy free recipe serves 2 and costs <b>$2.58 per serving</b>. It is a <b>reasonably priced</b> recipe for fans of Central American food. 1 person were impressed by this recipe. It works well as a main course. This recipe from Foodista requires chicken thighs, pineapple juice, tsp seasoning, and green onions. All things considered, we decided this recipe <b>deserves a spoonacular score of 60%</b>. This score is good. Similar recipes include <a href=\"https://spoonacular.com/recipes/grilled-caribbean-chicken-thighs-743789\">Grilled Caribbean Chicken Thighs</a>, <a href=\"https://spoonacular.com/recipes/caribbean-chicken-143711\">Caribbean Chicken</a>, and <a href=\"https://spoonacular.com/recipes/caribbean-chicken-418557\">Caribbean Chicken</a>.",
            "cuisines": [
                "Central American",
                "Caribbean"
            ],
            "dishTypes": [
                "lunch",
                "main course",
                "main dish",
                "dinner"
            ],
            "diets": [
                "gluten free",
                "dairy free"
            ],
            "occasions": [],
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "Prepare marinade: In a food processor, add lime juice, garlic, onion, jalapeno, and green onion . Pulse until pureed.",
                            "ingredients": [
                                {
                                    "id": 11291,
                                    "name": "green onions",
                                    "localizedName": "green onions",
                                    "image": "spring-onions.jpg"
                                },
                                {
                                    "id": 9160,
                                    "name": "lime juice",
                                    "localizedName": "lime juice",
                                    "image": "lime-juice.png"
                                },
                                {
                                    "id": 11979,
                                    "name": "jalapeno pepper",
                                    "localizedName": "jalapeno pepper",
                                    "image": "jalapeno-pepper.png"
                                },
                                {
                                    "id": 0,
                                    "name": "marinade",
                                    "localizedName": "marinade",
                                    "image": "seasoning.png"
                                },
                                {
                                    "id": 11215,
                                    "name": "garlic",
                                    "localizedName": "garlic",
                                    "image": "garlic.png"
                                },
                                {
                                    "id": 11282,
                                    "name": "onion",
                                    "localizedName": "onion",
                                    "image": "brown-onion.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404771,
                                    "name": "food processor",
                                    "localizedName": "food processor",
                                    "image": "food-processor.png"
                                }
                            ]
                        },
                        {
                            "number": 2,
                            "step": "Pour into a small bowl, add pineapple juice, brown sugar, and spices.",
                            "ingredients": [
                                {
                                    "id": 9273,
                                    "name": "pineapple juice",
                                    "localizedName": "pineapple juice",
                                    "image": "pineapple-juice.jpg"
                                },
                                {
                                    "id": 19334,
                                    "name": "brown sugar",
                                    "localizedName": "brown sugar",
                                    "image": "dark-brown-sugar.png"
                                },
                                {
                                    "id": 2035,
                                    "name": "spices",
                                    "localizedName": "spices",
                                    "image": "spices.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404783,
                                    "name": "bowl",
                                    "localizedName": "bowl",
                                    "image": "bowl.jpg"
                                }
                            ]
                        },
                        {
                            "number": 3,
                            "step": "Mix together.",
                            "ingredients": [],
                            "equipment": []
                        },
                        {
                            "number": 4,
                            "step": "In a gallon plastic bag, add chicken, and marinade.",
                            "ingredients": [
                                {
                                    "id": 0,
                                    "name": "marinade",
                                    "localizedName": "marinade",
                                    "image": "seasoning.png"
                                },
                                {
                                    "id": 0,
                                    "name": "chicken",
                                    "localizedName": "chicken",
                                    "image": "whole-chicken.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 221671,
                                    "name": "ziploc bags",
                                    "localizedName": "ziploc bags",
                                    "image": "plastic-bag.jpg"
                                }
                            ]
                        },
                        {
                            "number": 5,
                            "step": "Mix together.",
                            "ingredients": [],
                            "equipment": []
                        },
                        {
                            "number": 6,
                            "step": "Place in fridge and let marinate for at least 4 hours to 24 hours.",
                            "ingredients": [],
                            "equipment": [],
                            "length": {
                                "number": 1680,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 7,
                            "step": "Preheat broiler.",
                            "ingredients": [],
                            "equipment": [
                                {
                                    "id": 405914,
                                    "name": "broiler",
                                    "localizedName": "broiler",
                                    "image": "oven.jpg"
                                }
                            ]
                        },
                        {
                            "number": 8,
                            "step": "Remove from bag and place chicken skin side down in a baking sheet lined with aluminum foil. Cook for 5 minutes till the tops are no longer pink. Flip over and cook for remaining 25 minutes till the skin is crispy.",
                            "ingredients": [
                                {
                                    "id": 0,
                                    "name": "chicken",
                                    "localizedName": "chicken",
                                    "image": "whole-chicken.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404765,
                                    "name": "aluminum foil",
                                    "localizedName": "aluminum foil",
                                    "image": "aluminum-foil.png"
                                },
                                {
                                    "id": 404727,
                                    "name": "baking sheet",
                                    "localizedName": "baking sheet",
                                    "image": "baking-sheet.jpg"
                                }
                            ],
                            "length": {
                                "number": 30,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 9,
                            "step": "Serve immediately. Enjoy!",
                            "ingredients": [],
                            "equipment": []
                        }
                    ]
                }
            ],
            "spoonacularScore": 66.94091796875,
            "spoonacularSourceUrl": "https://spoonacular.com/caribbean-chicken-thighs-637103"
        }
    ],
    "offset": 0,
    "number": 1,
    "totalResults": 628
};

printFood(APIRESULT);
*/

//onclick2-startar get food
//get food hämtar listtosearch och bestämmer vad som ska hämtas-kan ev reglera ingredienser osv
//Listtoserch anger vilka ingredienser som ska sökas efter
//OVAN 3 VERKAR SAMTIDIGT IHOP

//printfood- 
