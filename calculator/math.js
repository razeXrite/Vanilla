
let length = localStorage.getItem('length');
let width = localStorage.getItem('width');
const step = 2;
let costSvai = 2875;
let costMontajka = 2300;
let Perimetr = 0;

Perimetr=2*(length+width);

let kolSvai = (length/step+1)*(width/step+1);

const vintFundCost = kolSvai * (costSvai + costMontajka);
console.log(vintFundCost);
var aboba = document.getElementById('fundCost');
aboba.innerText = vintFundCost;

let vintFullCost = vintFundCost + 12938 + 7763 + 10000;
let ttlCost = document.getElementById('totalCost');
ttlCost.innerText = vintFullCost + " руб.";

let fullHouseCost = 0;
const vintPricePlusBtn = document.getElementById('vintPricePlus');
vintPricePlusBtn.addEventListener('click', () => {
    fullHouseCost += vintFullCost;
    let fullHouseCostInr = document.getElementById('totalNumber');
    fullHouseCostInr.innerText = fullHouseCost;
    vintFullCost = 0;
});



