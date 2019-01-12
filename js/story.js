var workStart = 9.5;
var firstTrain1 = 445/60;
var firstTrain1Arrives = 494/60;
var firstTrain2 = 454/60;
var firstTrain2Arrives = 503/60;
var secondTrain1;
var secondTrain1Arrives;
var secondTrain2;
var secondTrain2Arrives;
var currentTime;

var txt;
var name = prompt("Please enter your name");
if (person == null || person == "") {
    txt = "They can't be bothered";
    console.log(txt);
} else {
    console.log(name);
}
document.getElementById("name").innerHTML = person;