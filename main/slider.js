var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;
slider.oninput = function () {
    output.innerHTML = this.value;
}
var slidertwo = document.getElementById("myRangetwo");
var outputtwo = document.getElementById("demotwo");
outputtwo.innerHTML = slidertwo.value;
slidertwo.oninput = function () {
    outputtwo.innerHTML = this.value;
}
