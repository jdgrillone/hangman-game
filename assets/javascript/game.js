//array of possible words
var wordsList = [
		"cat",
		"window",
		"phone",
		"javascript"
		];

var lives = 12;

//choose a random index from wordsList
var currentWord = wordsList[Math.floor(Math.random() * wordsList.length)];


//set up answerArray
var answerArray = [];
for (var i = 0; i < currentWord.length; i++){
	answerArray[i] = " _ ";
}

document.getElementById("letters").innerHTML = answerArray.join(" ");
document.getElementById("lives").innerHTML = lives;

// var remainingLetters = currendWord.length;

//game loop
// while (remainingLetters > 0 || lives > 0) {
	//var guess = keystroke  - listen for key input
	//if guess = incorrect {add guess to lettersGuessed array, lives -1};
	//if guess = lettersGuessed {do nothing};
	//if guess = word.length {add guess to lettersGuessed array, update game state};

