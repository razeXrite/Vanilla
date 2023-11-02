var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;
slider.oninput = function () {
    let dlina=output.innerHTML = this.value;
    console.log(dlina);
}
var slidertwo = document.getElementById("myRangetwo");
var outputtwo = document.getElementById("demotwo");
outputtwo.innerHTML = slidertwo.value;
slidertwo.oninput = function () {
    let shir=outputtwo.innerHTML = this.value;
    console.log(shir);
}
