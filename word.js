var letter = require('./letter.js');

function Word(target) {
	this.target = target;
	this.lets = [];
	this.found = false;

	this.geLet = function(){
		for (var i = 0; i < this.target.length; i++){
			this.lets.push( new letter (this.target[i]));
		}

	};

	this.findWord = function() {
		this.found = this.lets.every(function(currLett) {
			return currLett.appear;
		});
		return this.found;
	};

	this.checkLetter = function(guessLet) {
		var toReturn = 0;

		for (var i = 0; i < this.lets.length; i++) {
			if (this.lets[i].charac == guessLet){
				this.lets[i].appear = true;
				toReturn++;
			}
		}
		return toReturn;
	};

	this.wordRender = function(){
		var string = '';
		for (var i = 0; < this.lets[i].length; i++){ string += letterRender();
			
	}
	return string;
};
}

module.exports = Word;






