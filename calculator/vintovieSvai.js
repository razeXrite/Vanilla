export function svai(id, kolSvai) {
    let price = 0;
    if (id === 'jelezPricePlus') {
        let jelezSv = 3190;
        let jelezMont = 2420;

        let jelezFirst = kolSvai * (jelezSv + jelezMont);
        let firstLi = document.getElementById('jelezFundCost');
        firstLi.innerText = jelezFirst;

        price = jelezFirst + 14025 + 8415 + 15000;
        let ttlJelez = document.getElementById('jelezTotalCost');
        ttlJelez.innerText = price + " руб.";
    }
    else if (id === 'vintPricePlus') {
        let ttlCost = document.getElementById('totalCost');
        let aboba = document.getElementById('fundCost');

        let costSvai = 2875;
        let costMontajka = 2300;

        let vintFundCost = kolSvai * (costSvai + costMontajka);

        aboba.innerText = vintFundCost;
        price = vintFundCost + 12938 + 7763 + 10000;
        ttlCost.innerText = price + " руб.";
    }
    return price;
}
