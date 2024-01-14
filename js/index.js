//importera moduler
import { getFoodR } from "./widget/fetch.js";
import { getFood } from "./widget/fetch.js";
import { printFood } from "./widget/print.js";

//deklarera variabler
let submitbtn = document.getElementById('submitbtn');
let submitbtnR = document.getElementById('submitbtnR');
let backbtn = document.getElementById('backbtn');
let menu = document.getElementById('menu');

//klickar på menyn i responsivt läge
menu.addEventListener('click', showMenu);


//submit knapp för roulette sidan
if (submitbtnR)
{
    submitbtnR.addEventListener('click', onclick);
    submitbtnR.addEventListener('click', hideForm);
}

//submit knapp för search sidan
if (submitbtn) {
    submitbtn.addEventListener('click', onclick2);
    submitbtn.addEventListener('click', hideForm);
}

//backa
if (backbtn) {
    backbtn.addEventListener('click', showForm);
}

//vida meny i responsivt läge
function showMenu() {  
    let nav = document.getElementById('nav');
    nav.style.display = "flex";
};

//genomför roulette
async function onclick() {
    document.getElementById('videomodal').style.display = 'flex';
    setTimeout(() => {
        document.getElementById('videomodal').style.display = 'none';
    }, 3000);

    let data = await getFoodR();
    printFood(data);
    return(data);
};

//sök maträtter
async function onclick2() {
    let data = await getFood();
    printFood(data);
    return(data);
};

//dölj formulär
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

//visa formulär
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

