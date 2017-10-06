//array of possible words
var wordsList = [
		"pacman",
		"donkykong",
		"contra",
		"metroid",
                "gauntlet",
                "galaga",
		];

var lives = 12;
var lettersGuessed = [ ];
var guess = "";

//choose a random index from wordsList
var currentWord = wordsList[Math.floor(Math.random() * wordsList.length)];


//set up answerArray
var answerArray = [];
for (var i = 0; i < currentWord.length; i++){
	answerArray[i] = " _ ";
}
//display answerArray to page
document.getElementById("letters").innerHTML = answerArray.join(" ");
// document.getElementById("lettersGuessed").innerHTML = lettersGuessed.join(" ");

//display remaining lives to page
document.getElementById("lives").innerHTML = lives;

var remainingLetters = currentWord.length;
//listen for user input
document.onkeyup = function(event) {
        var guess = event.key;
                

        for (var j = 0; j < currentWord.length; j++) {


                if (currentWord[j] === guess) {
                        answerArray[j] = guess;
        		document.getElementById("letters").innerHTML = answerArray.join(" ");
                }else if(lettersGuessed.indexOf(guess) < 0 ) {      
                        document.getElementById("lettersGuessed").innerHTML = lettersGuessed.join(" ");
                        lettersGuessed.push(guess);
                        document.getElementById("lettersGuessed").innerHTML = lettersGuessed.join(" ");
                        lives--;
                        document.getElementById("lives").innerHTML = lives;
                }	
        }
        if (lives < 0){
                if(confirm('You Lose! Click "Okay" to play again.')){
                window.location.reload(); 
                }
        }
        if (answerArray.indexOf("_") < -1 ) {
                if(confirm('You Win! Click "Okay" to play again.')){
                window.location.reload(); 
                }
        }
}

// function userGuess(){
// 	for (var j = 0; j < currentWord.length, j++) {
// 		if (currentWord[j] === guess) {
// 			console.log("A");
// 		}else {
// 			console.log("B");
// 		}
// 	}
// }

// game loop
// while (remainingLetters > 0) {
// }	
// 	if guess = incorrect {add guess to lettersGuessed array, lives -1};
// 	if guess = lettersGuessed {do nothing};
// 	if guess = word.length {add guess to lettersGuessed array, update game state};

// }