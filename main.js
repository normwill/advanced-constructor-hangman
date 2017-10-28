var Word = require('./word.js');
var prompt = require('prompt');

console.log("Welcome to Advanced Constructor Hangman!");
console.log("Guess the letter for the random words that will appear in the game!");

prompt.start();

game = {
	wordBank: ['california', 'jupiter', 'json', 'css', 'lakers', 'obnoxious', 'evidence'],
	wordsWon: 0,
	guessesRemaining: 10,
	currentWrd: null,

	startGame: function (wrd){
		this.resetGuesses();
		this.currentWrd = new Word(this.wordBank[Math.floor(Math.random()* this.wordBank.length)]);
		this.currentWrd.getLet();
		this.promptUser();

	
	
}, resetGuesses: function(){
	this.guessesRemaining = 10;

},

promptUser: function(){
	var self = this;
	prompt.get(['guessLet'], function(err, result){
		console.log("You guessed: " + result.guessLet);
		var manyGuessed = self.currentWrd.checkLetter(result.guessLet);

		if(manyGuessed === 0){
			console.log("No");
			self.guessesRemaining--;
		} else {
			console.log("Yes");
			if(self.currentWrd.findWord()){
				console.log("You Won!");
				return;
			
		}
	}

	console.log("Guesses remaining: " = self.guessesRemaining);

	if((self.guessesRemaining > 0) && (self.currentWrd.found == false)){
		self.promptUser();
	}

	else if(self.guessesRemaining == 0){
		console.log("Game over. Correct word ", self.currentWrd.target);
	} else {
		console.log(self.currentWrd.wordRender());
	}

});
}
};

game.startGame();




