/* global variables */
//console.log for page edits //

// error: counts losses and wins on reset. 
// gives you a win either way.

$(document).ready(function () {
    console.log("READY!");

    // pageTweak = true;

    // current player - without refresh 
    var currentPlayer;

    var playerWins = 0;
    var playerLosses = 0;

    // Random number for player to guess < 19 - 120 <
    function createRandomNumber(min, max) {
        var minNumber = min;
        var maxNumber = max;
        var randomNumber = Math.floor(Math.random() * (maxNumber + 1) + minNumber);
        return randomNumber;
    }

    var randomNumber = createRandomNumber(19, 120);

    console.log(randomNumber);

    $('#match-this').html(randomNumber);


    // calculated by clicking misc. crystal
    var playerNumber = 0;


    // random crystal ammount values for buttons
    var yellCryst = createRandomNumber(1, 19);
    var pinkCryst = createRandomNumber(1, 19);
    var blueCryst = createRandomNumber(1, 19);
    var purpCryst = createRandomNumber(1, 19);
    console.log("Pink: " + pinkCryst + "Yellow: " + yellCryst + "Blue: " + blueCryst + "Purple: " + purpCryst);



    // /* assign variables functions*/

    $("#pink-gem-Button").on("click", function () {
        playerNumber = playerNumber + pinkCryst;
        $("#playerNumber").html(playerNumber);
        if (playerNumber === randomNumber) {
            playerWins = playerWins + 1
            $("#playerWins").html(playerWins);
            console.log("WINS!")
        } else if (playerNumber > randomNumber) { 
            playerLosses = playerLosses + 1
            $("#playerLosses").html(playerLosses);
            console.log("LOOSE!");
            newGame();
        }
    })

    $("#yell-gem-Button").on("click", function () {
        playerNumber = playerNumber + yellCryst;
        $("#playerNumber").html(playerNumber);
        if (playerNumber === randomNumber) {
            playerWins = playerWins + 1
            $("#playerWins").html(playerWins);
            console.log("WINS!")
        } else if (playerNumber > randomNumber) { 
            playerLosses = playerLosses + 1
            $("#playerLosses").html(playerLosses);
            console.log("LOOSE!");
            newGame();
        }
    })

    $("#blue-gem-Button").on("click", function () {
        playerNumber = playerNumber + blueCryst;
        $("#playerNumber").html(playerNumber);
        if (playerNumber === randomNumber) {
            playerWins = playerWins + 1
            $("#playerWins").html(playerWins);
            console.log("WINS!")
        } else if (playerNumber > randomNumber) { 
            playerLosses = playerLosses + 1
            $("#playerLosses").html(playerLosses);
            console.log("LOOSE!");
            newGame();
        }
    })

    $("#purp-gem-Button").on("click", function () {
        playerNumber = playerNumber + purpCryst;
        $("#playerNumber").html(playerNumber);
        if (playerNumber === randomNumber) {
            playerWins = playerWins + 1
            $("#playerWins").html(playerWins);
            console.log("WINS!")
        } else if (playerNumber > randomNumber) { 
            playerLosses = playerLosses + 1
            $("#playerLosses").html(playerLosses);
            console.log("LOOSE!");
            newGame();
        }
    })

    function newGame() {
        playerNumber = 0;
        randomNumber = createRandomNumber(19, 120);
        yellCryst = createRandomNumber(1, 19);
        pinkCryst = createRandomNumber(1, 19);
        blueCryst = createRandomNumber(1, 19);
        purpCryst = createRandomNumber(1, 19);
        console.log("Pink: " + pinkCryst + "Yellow: " + yellCryst + "Blue: " + blueCryst + "Purple: " + purpCryst);
        $("#playerNumber").html(playerNumber);
        $("#match-this").html(randomNumber);
        
    }

});