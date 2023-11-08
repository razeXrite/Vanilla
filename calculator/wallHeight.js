export function wallHeightPrice(length, width, id) {
    let sipPanel = (length + width) * (2 / 1.25);
    let wallPrice = 0;

    if (id === 'smallWallBtn') {
        let smallWallPrice = document.getElementById('smallWallPrice');
        wallPrice = Math.round(sipPanel * 4140);
        smallWallPrice.innerHTML = wallPrice + ' руб.';
    }
    else if (id === 'bigWallBtn') {
        let bigWallPrice = document.getElementById('bigWallPrice');
        wallPrice = Math.round(sipPanel * 4485);
        bigWallPrice.innerHTML = wallPrice + ' руб.';
    }
    
    return wallPrice;
}