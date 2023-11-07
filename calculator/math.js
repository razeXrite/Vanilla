import { svai } from "./vintovieSvai.js";
import { wallHeightPrice } from "./wallHeight.js";

let length =Number(localStorage.getItem('length'));
let width =Number(localStorage.getItem('width'));
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

// крыша

// Объём пиламатериала на основной мауэрлат
let volumFlor = (length + width)* 2 * 0.15 * 0.05;

// Объём пиламатериала на промежуточный мауэрлат и опоры под стропилами
let volumPil = (length * 2) * (0.15 * (0.05 * 2));



// высота кровли в коньке
Math.radians = function(degrees) {
    return degrees * Math.PI / 180;
  }
let heightKrov = (width / 2) * Math.tan(Math.radians(30));


  
//   Стойки опорные под промежуточный мауэрлат
let stoyka = ((length / 0.6 + 1) * 2 * (heightKrov/2)*(0.15 * 0.05));


// Длина ската 
let lengthKrov = width / 2 / Math.cos(Math.radians(30)) + 0.5;
lengthKrov = lengthKrov.toFixed(2);


// конёк соединительные доски
let kon = (length * 3) * 0.15 * 0.05;



// лобовые доски

let lob = (length * 2 + lengthKrov * 2)*(0.15* 0.05);



// укосины
let ykos = length * 2 * 0.15 * 0.05;


// Объём

let volum = (length / 0.6 + 1) * 2 * lengthKrov * 0.15 * 0.05 + kon + lob + ykos;



// на запас
let zapaz = 0.3;

// Объём пиломатериала на стропильную систему

let volumStrop = volum + volum * zapaz;



// Объём досок на обрешетку
let volumObreshotka = (lengthKrov / 0.35 + 2 ) * 2 * width * 0.15 * 0.025;


// Объём пиломатериала на контробрешетку

let volueKontrobreshotka = (length / 0.6 + 1 ) * 2 * lengthKrov * 0.05 * 0.05;


// Стойки на фронтоны

let stoykaFron = (width * 2 + lengthKrov * 2) * 1.5 * 0.15 * 0.05;


// на запас2

let zapaz2 = 0.1;

// запас

let itogZapas = (volumFlor + volumPil + stoyka + volumStrop + volumObreshotka + volueKontrobreshotka + stoykaFron ) * zapaz2;



// Объём пиломатериала под кровлю

let volueKrov=(volumFlor+volumPil+stoyka+volumStrop+volumObreshotka+volueKontrobreshotka+stoykaFron+itogZapas);

// Пиломатериал под кровлю
let Pilomat = volueKrov * 24725;


// Количество металлочерепицы ОШИБКА В СМЕТЕ
let cherepica = (length + 0.5)*lengthKrov*2;


// Стоимость кровли из металлочерепицы

let metalCherepica = cherepica * 2070;


// Стоимость кровли
let summ = Pilomat + metalCherepica;
document.getElementById("summ").innerHTML = summ;