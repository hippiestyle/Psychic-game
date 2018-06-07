

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesThusFar = [];
var finalLetter;

    

var userWins = function() {
    wins++;
    document.querySelector("#user-wins").innerHTML = wins;
    finalLetter = randomLetter();
    guessesLeft = 9;
    document.querySelector("#guesses-left").innerHTML = guessesLeft;

}  

var userLoses = function() {
    losses++;
    document.querySelector("#user-losses").innerHTML = losses;
    finalLetter = randomLetter();
    guessesLeft = 9;
    document.querySelector("#guesses-left").innerHTML = guessesLeft;
}

var userGuesses = function() {
    guessesLeft--;
    document.querySelector("#guesses-left").innerHTML = guessesLeft;
}

var guessesSoFar = function(choice) {
    guessesThusFar.push(choice);
    document.querySelector("#guesses-sofar").innerHTML = guessesThusFar.join(" ");

}

var userWonOrLost = function() {
    //reset the game
}

// var reset = function() {
// var guessesLeft = 9;
// var guessesThusFar = [];
// var finalLetter;
// }

var randomLetter = function() {
    var letters = "abcdefghijklmnopqrstuvwxyz";
    var randomIndex = Math.floor((Math.random() * letters.length));
    return letters[randomIndex];  
      
};

finalLetter = randomLetter();
console.log("Computer Letter: " + finalLetter);

document.onkeyup = function(event) {
var userChoice = event.key;

userGuesses();

if (userChoice === finalLetter) {
    userWins();
    guessesThusFar = [];
    document.querySelector("#guesses-sofar").innerHTML = guessesThusFar.join(" ");
    alert("Wow You're Psychic, You Won! Want to play again?")
    reset(); 
    

} else {
    guessesSoFar(userChoice);  
}

if (guessesLeft == 0) {
    userLoses();
    alert("GAME OVER");
    guessesThusFar = [];
    document.querySelector("#guesses-sofar").innerHTML = guessesThusFar.join(" ");
    reset(); 

}

};            
