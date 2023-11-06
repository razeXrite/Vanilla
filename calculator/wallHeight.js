export function wallHeightPrice(length, width, id) {
    // let currentWall = document.getElementById(id);
    let sipPanel = (Number(length) + Number(width)) * (2 / 1.25);
    let wallPrice = 0;

    if (id === 'smallWallBtn') {
        wallPrice = sipPanel * 4140;
    }
    else if (id === 'bigWallBtn') {
        wallPrice = sipPanel * 4485;
    }
    
    return Math.round(wallPrice);
}