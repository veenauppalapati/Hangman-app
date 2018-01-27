
var Word = function (){

	// var randomWord = '';
	// var collectionOfWords;

	this.getRandomWord = function(){
		//store few words in a collection
	var collectionOfWords = ["word1", "word2", "word3"];
	// console.log(collectionOfWords);

	//access a random word from the collectionOfWords array and store it
	randomWord = collectionOfWords[Math.floor(Math.random()* collectionOfWords.length)];
	console.log(randomWord);
	}
	

	this.displayUnderscores = function (randomWord){
	
	// console.log(randomWord);
	// Define the underScore Variable to store underscores
	var underScore = "";

	// var randomWordSplit = randomWord.split("");
	// console.log(randomWordSplit);

	//go through the length of the array and display undrscores for each character
	for(var i = 0; i<randomWord.length; i++){
		underScore += "_";
	// 	underScore.push("_");
	}
	// console.log(underScore);
	var newunderScore = underScore.split('').join(' ').trim();
	console.log(newunderScore);
	// for (var i = 0; i < underScore.length; i++) {
	// 	console.log(underScore.charAt(i));
	// }

	// // // creates space inbetween each character and trimming the spaces at the beginning and end of the word and storing it
	// var newRandomWord = randomWord.split('').join('').trim();
	// console.log(newRandomWord);
	// for (var i = 0; i < newRandomWord.length; i++) {	
	// 	console.log(newRandomWord.charAt(i));
	// }

	}

}

var displayRandomWord = new Word ();
displayRandomWord.getRandomWord();
displayRandomWord.displayUnderscores();

module.exports = { 
	randomWord : randomWord,
	newunderScore : newunderScore
}









