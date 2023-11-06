
let length = localStorage.getItem('length');
let width = localStorage.getItem('width');
const step = 2;
let costSvai = 2875;
let costMontajka = 2300;
let Perimetr = 0;

Perimetr=2*(length+width);

let kolSvai = (length/step+1)*(width/step+1);

const vintFundCost = kolSvai * (costSvai + costMontajka);
var aboba = document.getElementById('fundCost');
aboba.innerText = vintFundCost;

let vintFullCost = vintFundCost + 12938 + 7763 + 10000;
let ttlCost = document.getElementById('totalCost');
ttlCost.innerText = vintFullCost + " руб.";

let fullHouseCost = 0;
const vintPricePlusBtn = document.getElementById('vintPricePlus');

let fullHouseCostInr = document.getElementById('totalNumber');

vintPricePlusBtn.addEventListener('click', () => {
    fullHouseCost += vintFullCost;
    fullHouseCostInr.innerText = fullHouseCost;
    vintFullCost = 0;
});


// Железобетон

let jelezSv = 3190;
let jelezMont = 2420;

let jelezFirst = kolSvai * (jelezSv + jelezMont);
var firstLi = document.getElementById('jelezFundCost');
firstLi.innerText = jelezFirst;

let fullJelez = jelezFirst + 14025 + 8415 + 15000;
let ttlJelez = document.getElementById('jelezTotalCost');
ttlJelez.innerText = fullJelez + " руб.";

const jelezBtn = document.getElementById('jelezPricePlus');
jelezBtn.addEventListener('click', () => {
    fullHouseCost += fullJelez;
    fullHouseCostInr.innerText = fullJelez;
    vintFullCost = 0;
    fullJelez = 0;
});
