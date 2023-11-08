export function stappingTotalPrice(length, width, step) {
    // обвязка вертикальная
    let lenghtVertDsk = (length / step + 1) * width * 3;

    let lenghtGorizDsk = length * 2 * 3;

    let obiemVert = +(lenghtVertDsk * 0.2 * 0.05);

    let obiemGoriz = +(lenghtGorizDsk * 0.2 * 0.05);

    let obiemPilomat = obiemVert + obiemGoriz;
    obiemPilomat += (obiemPilomat * 0.15);
    obiemPilomat = +obiemPilomat;

    let resultObvazkaFund = Math.round(obiemPilomat * 24725);
    return resultObvazkaFund;
}