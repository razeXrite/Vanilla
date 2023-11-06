import { svai } from "./vintovieSvai.js";
import { wallHeightPrice } from "./wallHeight.js";

let length = localStorage.getItem('length');
let width = localStorage.getItem('width');
const step = 2;
let Perimetr = 0;
Perimetr = 2 * (length + width);
let kolSvai = (length / step + 1) * (width / step + 1);



// винтовая свая
let svaiPrice = 0;
const vintPricePlusBtn = document.getElementById('vintPricePlus');
vintPricePlusBtn.addEventListener('click', () => {
    svaiPrice = svai(vintPricePlusBtn.id, kolSvai);
    update();
});

// Железобетоная свая
const jelezBtn = document.getElementById('jelezPricePlus');
jelezBtn.addEventListener('click', () => {
    svaiPrice = svai(jelezBtn.id, kolSvai);
    update();
});


// wallHeight used
let wallPrice = 0;
// при клике на стену 2.5 метра
document.getElementById('smallWallBtn').addEventListener('click', () => {
    wallPrice = wallHeightPrice(length, width, 'smallWallBtn');
    update();
})

// при клике на стену 2.8 метра
document.getElementById('bigWallBtn').addEventListener('click', () => {
    wallPrice = wallHeightPrice(length, width, 'bigWallBtn');
    update();
});

// Обновляет изменения при клике на добавить)
function update() {
    let main = document.getElementById('totalNumber');
    let RESULT = wallPrice + svaiPrice; // ...
    main.innerText = RESULT;
}


// При переходе на калькулятор подругажет стоимость всех функций у модалок :)
wallHeightPrice(length, width, 'bigWallBtn');
wallHeightPrice(length, width, 'smallWallBtn');
svai(jelezBtn.id, kolSvai);
svai(vintPricePlusBtn.id, kolSvai);

// Обвязка
// обвязка вертикальная

let lenghtVertDsk = (length / step+1) * width*3;
console.log(lenghtVertDsk)

let lenghtGorizDsk = length * 2 * 3;
console.log(lenghtGorizDsk);

let obiemVert = +(lenghtVertDsk * 0.2 * 0.05);
console.log(obiemVert);

let obiemGoriz = +(lenghtGorizDsk * 0.2 * 0.05);
console.log(obiemGoriz);

let obiemPilomat = obiemVert + obiemGoriz;
obiemPilomat += (obiemPilomat * 0.15);
obiemPilomat = +obiemPilomat;
console.log(obiemPilomat);

let resultObvazkaFund = Math.round(obiemPilomat * 24725);
console.log(resultObvazkaFund);
