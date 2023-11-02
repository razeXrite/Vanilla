let length = 10;
let width = 7;
const step = 2;
let costSvai = 2875;
let costMontajka = 2300;


let kolSvai = (length/step+1)*(width/step+1);

const vintFundCost = kolSvai * (costSvai + costMontajka);
console.log(vintFundCost);
var aboba = document.getElementById('fundCost');
aboba.innerText = vintFundCost;
console.log(shir);