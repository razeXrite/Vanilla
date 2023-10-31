let length = 10;
let width = 7;
const step = 2;
let costSvai = 2875;
let costMontajka = 2300;


let kolSvai = (length/step+1)*(width/step+1);

let vintFundCost = kolSvai * (costSvai + costMontajka);
console.log(vintFundCost);