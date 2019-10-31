$(document).ready(function () {

    // Variable of random goal number 
    var goalNumber = Math.floor(Math.random() * 101 + 19)
    console.log("goalNumber: " + (goalNumber));

    // wins, losses, fullness value 
    var totalWins = 0;
    var totalLosses = 0;
    var fullness = 0;

    // Shows goal number in goal div
    $("#goalNumberShow").text(goalNumber);

    // Variable for 1-4 foods random values 
    var foodvalue1 = Math.floor(Math.random() * 11 + 1)
    var foodvalue2 = Math.floor(Math.random() * 11 + 1)
    var foodvalue3 = Math.floor(Math.random() * 11 + 1)
    var foodvalue4 = Math.floor(Math.random() * 11 + 1)

    // Event for clicking on food
    $("#food1").on("click", function () {
        fullness = fullness + foodvalue1;
        // Shows fullness level in console 
        console.log("fullness:" + fullness);

    })

    // win function

    // lose function

    // reset game function 


})