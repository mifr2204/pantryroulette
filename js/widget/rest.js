
import { getFood } from "./fetch.js";
import { printFood } from "./print.js";

window.addEventListener("load", (onLoad()))

async function onLoad() { /*Hämtar data och skriver ut den på webbsidan vid laddning*/
    let data = await getFood();
    
    printFood(data);
};


export function printFood(data) {
 
    data.forEach((play) => {
        const table = document.getElementById("table");
        const tr = document.createElement("tr");
        
        
        var td1 = document.createElement('td');
        var a1 = document.createElement('a');
        var a2 = document.createElement('a');
        var span = document.createElement('span');
        var td2 = document.createElement('td');
        var td4 = document.createElement('td');
        var td5 = document.createElement('td');
        var td6 = document.createElement('td');
        
        td1.setAttribute('class','game'); /*Skriver ut matchnumret */
        td1.innerText += play.game;
        tr.appendChild(td1);
      
        td2.setAttribute('class','comp'); /*Skriver ut vilka lag som spelat med länk till varje lag */
        a1.setAttribute('href',play.competitors[1].homepage);
        a1.innerText +=  play.competitors[1].teamName;
        td2.appendChild(a1);
        
            span.innerText += ' -VS- ';
            td2.appendChild(span);
            
            
            a2.setAttribute('href',play.competitors[2].homepage);
            a2.innerText +=  play.competitors[2].teamName;
            td2.appendChild(a2);
            tr.appendChild(td2);

        function checkmark(){ /*Skapar checkmark för reslutaten */
            var div = document.createElement('div');
            var span2 = document.createElement('span');
            var span3 = document.createElement('span');
            var td3 = document.createElement('td');
        
            td3.setAttribute('class','res');
            div.setAttribute('class','checkmark');
            span2.setAttribute('class','stem');
            div.appendChild(span2);
            span3.setAttribute('class','kick');
            div.appendChild(span3);
            td3.appendChild(div);
            tr.appendChild(td3);
        };
        

        if(play.outcome == 1){/*Skriver ut resultaten på rätt ställe */
       
            checkmark(data);    
        }else{
            tr.appendChild(td4);
        };
        if(play.outcome == 'X'){
            checkmark(data); 
        }else{
            tr.appendChild(td5);
        };
        if(play.outcome == 2){
            checkmark(data); 
        }else{
            tr.appendChild(td6);
        };

        table.appendChild(tr);
       
    });
 
};    







    let li = document.createElement('li');
    let span = document.createElement('span');
    span.textContent = dish.title;
    li.appendChild(span);
    ul.appendChild(li);

    let li2 = document.createElement('li');
    let span2 = document.createElement('span');
    span2.textContent = dish.type;
    li2.appendChild(span2);
    ul.appendChild(li2);
    let li3 = document.createElement('li');
    let span3 = document.createElement('span');
    span3.textContent = dish.type;
    li3.appendChild(span3);
    ul.appendChild(li3);

    let li = document.createElement('li');
    let span = document.createElement('span');

    li.appendChild(span);
    ul.appendChild(li);

    let li2 = document.createElement('li');
    let span2 = document.createElement('span');
 
    li2.appendChild(span2);
    ul.appendChild(li2);
    let li3 = document.createElement('li');
    let span3 = document.createElement('span');
  
    li3.appendChild(span3);
    ul.appendChild(li3);


    if (!result.includes(ingredients.name)){
        console.log("true")
        result = result + ingredients.name;
        console.log(result);
    }else{
        console.log("error")
    };


    
    let result = [];
    let c = 0;

    console.log(ingredients);
    
    for (var i = 0; i < ingredients.length; i++) {
        for (var n = i + 1; n < ingredients.length; n++) {
            if (ingredients[i] === ingredients[j]) {
                result.push(ingredients[i]);
            };
        };
    };

    console.log(result);

    console.log(steps);
    let ul = document.getElementById('dishlist');

    let li = document.createElement('li');
    let span = document.createElement('span');
    span.textContent = result;
    
    li.appendChild(span);
    ul.appendChild(li);



    function inst2(steps){
                
        let ing2 = steps.ingredients
        ing2.forEach(createArray);
            
        function createArray(ingredients){//för vareje ingrediens
            let ingName= ingredients.name;
            var result = "";
            var result = result + ' ' + ingName 
            console.log(result);
            console.log('ingname');
        
        };    

    };
        

};


};    
'
function createArray(ingredients){
    let ingName= ingredients.name;
    
    let ingred = document.getElementById('ingred');
    let ingarr = localStorage.getItem('ingreds') ?
    JSON.parse(localStorage.getItem('ingreds')) : [];
    let ul = document.getElementById('dishlist');

    ingarr.push(ingred.value);
    localStorage.setItem('ingreds', JSON.stringify(ingarr));
    ingred.value = '';

    console.log(ingredients); //varje ingrediens alla parametrar
    console.log(ing2);// alla ingredienser i ett steg
    console.log(stepsarr);// alla steg
    console.log(result);
    console.log(ingName);//namn på enskild

};    

function createArray(ingredients){
    let ingName= ingredients.name;
    
    let ingarr = document.getElementById('ingarr');
    let ingItem = localStorage.getItem('ingItem') ?
    JSON.parse(localStorage.getItem('ingItem')) : [];

    ingarr.push(ingred.value);
    localStorage.setItem('ingItem', JSON.stringify(ingarr));
    ingred.value = '';

    console.log(ingredients); //varje ingrediens alla parametrar
    console.log(ing2);// alla ingredienser i ett steg
    console.log(stepsarr);// alla steg
    console.log(result);
    console.log(ingName);//namn på enskild

};   








export function dname(data){ //Printar ut namnet på rätten
    let disharray = data.results;
    disharray.forEach(nprint);
    
    function nprint(dish){

        let ul = document.getElementById('dishlist');
        let li = document.createElement('li');
        let h2 = document.createElement('h2');
        h2.textContent = dish.title;
        li.innerHTML='<br>'
        li.appendChild(h2);
        ul.appendChild(li);
        h2.setAttribute('class', 'name');
    };
};
export function ingredientsPrint(data){ //printar ut ingredienserna
    
    let ingreditents = [];
    for (let i = 0; i < data.results[0].analyzedInstructions[0].steps.length; i++) {
        for (let j = 0; j < data.results[0].analyzedInstructions[0].steps[i].ingredients.length; j++) {
            let ingredient = data.results[0].analyzedInstructions[0].steps[i].ingredients[j].name;
            if (ingreditents.indexOf(ingredient) < 0) {
                ingreditents.push(ingredient);
            }
        }
    }

    let result = '';
    for (let i = 0; i < ingreditents.length; i++) {
        if (result != '')
        {
            result = result + ',  ';
        };
        result = result + '- ' + ingreditents[i];
    };

        function printIngTitle(){
            let ul = document.getElementById('dishlist');
            let li = document.createElement('li');
            let span = document.createElement('span');
            let h3 = document.createElement('h3');
            
            h3.textContent = 'Ingredients';
            li.innerHTML='<br>'
            li.appendChild(h3);
            ul.appendChild(li);
            h3.setAttribute('class', 'ingredientsTitle');
    
        };

        printIngTitle();
        
        let ul = document.getElementById('dishlist');
        let li = document.createElement('li');
        let span = document.createElement('span');
        let h3 = document.createElement('h3');

        span.textContent = result;
        li.innerHTML='<br>'
        li.appendChild(span);
        ul.appendChild(li);
        span.setAttribute('class', 'ingredients');

    console.log(result);
    //TODO: skriv ut resultatet i HTML
};
export function steps(data){ //Printar ut instruktionerna
    let disharray = data.results;
    disharray.forEach(dprint);

    function dprint(dish){

        let dishinst = dish.analyzedInstructions
        dishinst.forEach(instPrint);

        function instPrint(instructions){

            let stepsarr = instructions.steps
            
            let ol = document.getElementById('dishlist');
            let h3 = document.createElement('h3');
            let li = document.createElement('li');
            
            h3.textContent = 'Instructions';
            
            li.appendChild(h3);
            ol.appendChild(li);
            
            h3.setAttribute('class', 'titleInstructions');
            
            stepsarr.forEach(inst2);
            
            function inst2(steps){
                let ol = document.getElementById('dishlist');

                let li = document.createElement('li');
                let span = document.createElement('span');
                span.textContent = steps.step;
                li.innerHTML='<br>'
                li.appendChild(span);
                ol.appendChild(li);
                span.setAttribute('class', 'instructions');
    
            };
        };
    };
 
};
 

    




