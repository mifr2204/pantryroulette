
//deklarera variabler
let ing = document.getElementById('ing');
let ingArray = localStorage.getItem('ings') ?
JSON.parse(localStorage.getItem('ings')) : [];
let tbody = document.getElementById('list');

//... för varje ingrediens
ingArray.forEach(addIng);

//skapar ingrediensen i tabellen
function addIng(text){
    
    let delbut = document.createElement('input');
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let span = document.createElement('span');
    span.textContent = text;
    td1.appendChild(span);
    td2.appendChild(delbut);
    span.setAttribute("class", "spanIng")
    delbut.setAttribute("type", "button");
    delbut.setAttribute("onclick", "delone(this)");
    delbut.setAttribute("value", "remove");
    delbut.setAttribute("class", "removeOne");
    tr.appendChild(td1);
    tr.appendChild(td2);
    tbody.appendChild(tr);
};

//vid klick för att lägga till ny ingrediens
function addbutton(){
    if (ing.value.length < 1) {
        alert('You must specify an ingredient to add');
        ing.focus();
        return;
    }
    ingArray.push(ing.value);
    localStorage.setItem('ings', JSON.stringify(ingArray));
    addIng(ing.value);
    ing.value = '';
};

//Radera samtliga ingredienser
function delbutton(){
    localStorage.clear();
    tbody.innerHTML = '';
    ingArray = [];

};

//Radera specifik ingrediens
function delone(item){
    let value = item.parentElement.parentElement.querySelector('span').innerText;
    for (let i = 0; i < ingArray.length; i++) {
        if (ingArray[i] == value) {
            ingArray.splice(i, 1);
            break;
        }
    }
    localStorage.setItem('ings', JSON.stringify(ingArray));
    item.parentElement.parentElement.remove();
};
