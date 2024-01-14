//Modul export - Printar ut namnet på rätten
export function dname(dish){
    let ul = document.getElementById('dishlist');
    let li = document.createElement('li');
    let h2 = document.createElement('h2');
    h2.textContent = dish.title;
    li.innerHTML='<br>'
    li.appendChild(h2);
    ul.appendChild(li);
    h2.setAttribute('class', 'name');
};

//Modul export - printar ut ingredienserna
export function ingredientsPrint(dish){
    
    let ingreditents = [];
    if (dish.analyzedInstructions.length < 1)
    {
        console.log('No steps');
        return;
    }

    for (let i = 0; i < dish.analyzedInstructions[0].steps.length; i++) {
        for (let j = 0; j < dish.analyzedInstructions[0].steps[i].ingredients.length; j++) {
            let ingredient = dish.analyzedInstructions[0].steps[i].ingredients[j].name;
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

    //TODO: skriv ut resultatet i HTML
};


//Modul export - Printar ut instruktionerna
export function steps(dish){
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
 

    




