document.getElementById('formcalc').addEventListener('submit', (e) => {
    e.preventDefault();

    let length = document.getElementById('myRange').value;
    let width = document.getElementById('myRangetwo').value;

    localStorage.setItem('length', length);
    localStorage.setItem('width', width);

    window.location.href = './../calculator/calculator.php';
});