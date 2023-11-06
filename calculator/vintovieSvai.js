export function vintSvai(kolSvai) {
    let ttlCost = document.getElementById('totalCost');
    let aboba = document.getElementById('fundCost');

    let vintPrice = 0;
    let costSvai = 2875;
    let costMontajka = 2300;

    let vintFundCost = kolSvai * (costSvai + costMontajka);

    aboba.innerText = vintFundCost;
    vintPrice = vintFundCost + 12938 + 7763 + 10000;
    ttlCost.innerText = vintPrice + " руб.";
    return vintPrice;
}