$(document).ready(function () {

    // Variable of random goal number 
    var goalNumber = Math.floor(Math.random() * 101 + 19)
    console.log("goalNumber: " + (goalNumber));

    // Wins, losses, fullness beginning values
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

    // Event for clicking on food 1
    $("#food1").on("click", function () {
        fullness = fullness + foodvalue1;

        // Shows fullness level in console 
        console.log("fullness:" + fullness);

        // Changes instructions display :)
        $("#instructions").text("Keep Feeding The Cat!!! >:)");

        // Changes current fatness display :)
        $("#currentfatness").text(fullness);

        // Win condition
        if (fullness == goalNumber) {
            $("#instructions").text("The Cat is now perfectly stuffed :)");

            // resets game goal 0, fullness 0,  new goal number, new food values
            goalNumber = Math.floor(Math.random() * 101 + 19);
            $("#goalNumberShow").text(goalNumber);
            foodvalue1 = Math.floor(Math.random() * 11 + 1);
            totalWins++;
            $("#winsx").text(totalWins);
            console.log("wins: " + totalWins);
            fullness = 0;
        }

        // Lose condition 
        else if (fullness > goalNumber) {
            $("#instructions").text("The cat has exploded!!! :( :( :(");

            // resets game turn into function?
            goalNumber = Math.floor(Math.random() * 101 + 19);
            $("#goalNumberShow").text(goalNumber);
            foodvalue1 = Math.floor(Math.random() * 11 + 1);
            fullness = 0;
            totalLosses++;
            $("#losses").text(totalLosses);
        }
    })
})