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

    // Event for clicking on food
    $("#food1").on("click", function () {
        fullness = fullness + foodvalue1;

        // Shows fullness level in console 
        console.log("fullness:" + fullness);

        // Changes instructions display :)
        $("#instructions").text("Keep Feeding The Cat!!! >:)");

        // Changes current fatness display :)
        $("#currentfatness").text(fullness);

        if (fullness == goalNumber) {
            $("#instructions").text("cat is now fat :)");
        }
        else if (fullness > goalNumber) {
            $("#instructions").text("cat has exploded!!! :( :( :(")
        }
    })

    // win function
    // function won() {
    //     totalWins = totalWins + 1;
    // }
    // lose function
    // function lost() {
    //     $("#instructions").text("You Lost!!!!!");
    //     totalLosses = totalLosses + 1;


    // }
    // reset game function 


})