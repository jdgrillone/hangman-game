//array of possible words
var wordsList = [
		"cat",
		"window",
		"phone",
		"javascript"
		];

var lives = 12;
var lettersGuessed = [];
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
//display remaining lives to page
document.getElementById("lives").innerHTML = lives;

var remainingLetters = currentWord.length;
//listen for user input
document.onkeyup = function(event) {
        var guess = event.key;
}

function userGuess(){
	for (var j = 0; j < currentWord.length, j++;) {
		if (currentWord[j] === guess) {
			console.log("A");
		}else {
			console.log("B");
		}
	}
}

//game loop
// while (remainingLetters > 0) {
// }	
	//if guess = incorrect {add guess to lettersGuessed array, lives -1};
	//if guess = lettersGuessed {do nothing};
	//if guess = word.length {add guess to lettersGuessed array, update game state};

// }