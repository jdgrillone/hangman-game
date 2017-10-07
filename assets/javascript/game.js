
//set global variables
var wordsList = [
		"pacman",
		"donkykong",
		"contra",
		"metroid",
                "gauntlet",
                "galaga",
		];

var lives = 16;
var lettersGuessed = [ ];
var guess = "";

//choose a random index from wordsList
var currentWord = wordsList[Math.floor(Math.random() * wordsList.length)];

//set up answerArray
var answerArray = [];
for (var i = 0; i < currentWord.length; i++){
	answerArray[i] = " _ ";
}

//display answerArray and lives to page
document.getElementById("letters").innerHTML = answerArray.join(" ");
document.getElementById("lives").innerHTML = lives;

//listen for user input
document.onkeyup = function(event) {
        var guess = event.key;
                
        //check if guess is in current word
        for (var j = 0; j < currentWord.length; j++) {
                //if guess is in current word...
                if (currentWord[j] === guess) {
                        answerArray[j] = guess;
        		document.getElementById("letters").innerHTML = answerArray.join(" ");

                //if guess is NOT in current word...
                }else if(lettersGuessed.indexOf(guess) < 0 ) {      
                        document.getElementById("lettersGuessed").innerHTML = lettersGuessed.join(" ");
                        lettersGuessed.push(guess);
                        document.getElementById("lettersGuessed").innerHTML = lettersGuessed.join(" ");
                        lives--;
                        document.getElementById("lives").innerHTML = lives;
                }	
        }
        //lose condition when lives reaches 0
        if (lives < 0){
                if(confirm('You Lose! Click "Okay" to play again.')){
                window.location.reload(); 
                }
        }
        //win condition when answer array no longer contains underscores
        if (answerArray.indexOf(" _ ") < 0 ) {
                if(confirm('You Win! Click "Okay" to play again.')){
                window.location.reload(); 
                }
        }
}