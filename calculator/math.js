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
console.log(shir);