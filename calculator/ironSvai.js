export function ironSvai(kolSvai) {
    let ironPrice = 0;
    let jelezSv = 3190;
    let jelezMont = 2420;

    let jelezFirst = kolSvai * (jelezSv + jelezMont);
    let firstLi = document.getElementById('jelezFundCost');
    firstLi.innerText = jelezFirst;

    ironPrice = jelezFirst + 14025 + 8415 + 15000;
    let ttlJelez = document.getElementById('jelezTotalCost');
    ttlJelez.innerText = ironPrice + " руб.";
    console.log(ironPrice);
    return ironPrice;
}