var workStart = 9.5;
var leaveTime;
var firstTrain1 = 445 / 60;
var firstTrain1Arrives = 494 / 60;
var firstTrain2 = 454 / 60;
var firstTrain2Arrives = 503 / 60;
var secondTrain1;
var secondTrain1Arrives;
var secondTrain2;
var secondTrain2Arrives;
var currentTime;
var leaveTime;
var timeUntilTrain;
var missTrain;


var person = prompt("Please enter your name");
var title = person + "'s Getting to Work on Time";
document.getElementById("title").innerHTML = title;

function question1() {
    leaveTime = prompt("What time do you want to leave?");
    var hoursMinutes = leaveTime.split(":");
    var hours = parseFloat(hoursMinutes[0]);
    var minutes = parseFloat(hoursMinutes[1] / 60);
    leaveTime = hours + minutes;
    console.log(leaveTime);
    var timeUntilTrain = firstTrain1 - leaveTime;
    timeUntilTrain = parseInt(timeUntilTrain * 60);
    document.getElementById("leaveTime").innerHTML = leaveTime;
    document.getElementById("mins").innerHTML = timeUntilTrain;
    var traffic = leaveTime > 7;
    console.log(traffic);
    if (traffic == true) {
        missTrain = "There was a 5 minute delay due to traffic you missed your train. The next one is at 7:34.";
        currentTime = firstTrain2Arrives;
    } else {
        missTrain = "There was a 5 minute delay due to traffic but you still made it to the train on time!";
        currentTime = firstTrain1Arrives;
    }
    document.getElementById("missTrain").innerHTML = missTrain;
    console.log(currentTime);
};