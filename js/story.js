// DECLARING KNOWN CONSTANTS
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

// PROGRAM INITIATION
var person = prompt("Please enter your name");
var title = person + "'s Getting to Work on Time";
document.getElementById("title").innerHTML = title;

// DRIVING TO THE STATION QUESTION
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
    };
    document.getElementById("missTrain").innerHTML = missTrain;
    console.log(currentTime);
};

// SECTION 2
function nextChapter() {
    document.getElementById("chapter2").innerHTML = "<h2>Chapter 2 - The Second Train</h2>" +
    "<p>You managed to make it to Feltham at " + currentTime + ". Must be pretty tired</p>" + "<p>There's a coffee shop just outside the station. Do you want to grab a coffee?</p>" + "<button type=\"button\" onclick=\"question2()\">Question 2</button>";
};
var coffee;
function question2() {
    coffee = prompt("Do you go get a coffee?");
    if (coffee == "yes") {
        document.getElementById("getACoffee").innerHTML = "The lady at the till says you look tired and gives you a free coffee and breakfast toastie. It takes you 8 mins, but your train was delayed so you make it on time. You get on the train buzzing on caffiene.";
    } else {
        document.getElementById("getACoffee").innerHTML = "You sit and wait for the train. It is then delayed by a further 5 mins. You get on the train half asleep.";
    };
    document.getElementById("afterCoffee").innerHTML = "<p>You get to the station at 9:05, you have 25 mins to get to work</p>"; 
};