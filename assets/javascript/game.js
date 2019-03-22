
// array of computer choices
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
                        "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// creating variables to record wins and losses, guesses left and stored guesses
var wins = 0;
var losses = 0;
var guessLeft = 9;



document.onkeyup = function(event) {
    
    var yourGuess = event.key;
    var guessList = " " + yourGuess;

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    
    
    if (yourGuess === computerGuess){
    wins++;

    }else if (guessLeft === 0) {
        losses++;
        guessLeft = 9;
    }else{
        guessLeft--;
        
    }

    
    document.querySelector("#User-guess").innerHTML += yourGuess;
    
    
    document.getElementById("Wins-text").innerHTML = "Wins: " + wins;
    document.getElementById("losses-text").innerHTML = "Losses: " + losses;
    document.getElementById("Guesses-left").innerHTML ="Guesses left: " + guessLeft;
    document.getElementById("User-guess").innerHTML = "Your Guesses: " + guessList;
};