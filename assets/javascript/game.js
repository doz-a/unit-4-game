$(document).ready(function () {

    // Variable of random goal number 
    var goalNumber = Math.floor(Math.random() * 101 + 19)

    console.log(goalNumber);

    // Shows goal number in goal div
    $("#goalNumberShow").text(goalNumber);

})