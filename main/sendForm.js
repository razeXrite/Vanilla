document.getElementById('formcalc').addEventListener('submit', (e) => {
    e.preventDefault();

    let length = document.getElementById('myRange').value;
    let width = document.getElementById('myRangetwo').value;
    let floors = document.getElementById('floors').value;
    let Terace = document.getElementById('terace').value;

    // let args = {length,width,floors,Terace};
    
    (floors == "Количество этажей") ? alert("Вы не ввели количество этажей") : send();

    function send(){

    localStorage.setItem('length', length);
    localStorage.setItem('width', width);
    localStorage.setItem('floors', floors);
    localStorage.setItem('Terace', Terace);
    window.location.href = './../calculator/calculator.php';
}
});

