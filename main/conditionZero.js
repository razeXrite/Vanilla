let butt = document.getElementById("calc");


butt.addEventListener("click",(e)=>{
    (localStorage.width !== undefined )?(window.open("../calculator/calculator.php","_self")):(alert("shit"));
})
