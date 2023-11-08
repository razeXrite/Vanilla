var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.value = slider.value;
slider.oninput = function () {
    output.value = this.value;
}
output.oninput = function () {
    slider.value = this.value;
}
var slidertwo = document.getElementById("myRangetwo");
var outputtwo = document.getElementById("demotwo");
outputtwo.value = slidertwo.value;
slidertwo.oninput = function () {
    outputtwo.value = this.value;
}
outputtwo.oninput = function () {
    slidertwo.value = this.value;
}
