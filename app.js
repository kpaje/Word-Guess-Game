let wins = 0;
let losses = 0;
let guessRemaining = 9;
let wordArray = [];

const guessGameAction = {
	generateWord: function() {
		const wordList = [
			"FUBAR",
			"SNAFU",
			"TARFU",
			"FUGAZI",
			"BCD",
			"LLMF",
			"MANPADS",
			"PPPPPPP"
		];
		let randomNumber = Math.random() * wordList.length;
		let randomInteger = Math.floor(randomNumber);
		let newWord = wordList[randomInteger];
		return newWord;
	},
	setWordToArray: function() {
		wordArray = Array.from(this.generateWord());
		console.log(wordArray);
	},
	createHiddenArray: function() {
		randomWord = this.setWordToArray();
		const hiddenArray = randomWord.map(function() {
			return " _ ";
		});
		return hiddenArray;
	},
	logGuessInput: function() {
		const guesses = [];
		guess = "a";
		guesses.push(guess);
	}
	// addToGuessArray: function() {
	// 	const addGuessLetterInput = document.getElementById("addGuessLetterInput");
	// 	guessArray = guessArray.map(function(array) {
	// 		return array.toUpperCase();
	// 	});
	// 	addGuessLetterInput.textContent = guessArray.join();
	// }
	// subtractGuessRemaining: function() {
	// 	const displayRemainingGuesses = document.getElementById(
	// 		"subtractGuessRemaining"
	// 	);
	// 	displayRemainingGuesses.textContent = guessRemaining;
	// },
	// positiveMatch: function() {
	// 	const element = document.getElementById("isLetterPresent");
	// 	element.textContent = guess + " is present";
	// },
	// negativeMatch: function() {
	// 	const element = document.getElementById("isLetterPresent");
	// 	element.textContent = guess + " is NOT present";
	// },
	// isLetterPresent: function() {
	// 	console.log("random word is: ", randomWord);
	// 	if (randomWord.includes(guess[0])) {
	// 		this.positiveMatch();
	// 	} else {
	// 		this.negativeMatch();
	// 	}
	// 	this.showMatchingLetter();
	// },
	// toggleIntegerPositions: function() {
	// 	const position = randomWord.indexOf(guess.toString());
	// 	return position;
	// 	console.log("guess converted ", guess.toString());
	// 	console.log("integer position ", position);
	// },
	// getAllIndexes: function() {
	// 	for (i = 0; i < randomWord.length; i++) {
	// 		if (!randomWord[i].indexOf(guessArray) && randomWord[i] == guess) {
	// 			indexMatches.push(i);
	// 		}
	// 		console.log("getallindexes ", indexMatches);
	// 		return;
	// 	}
	// },
	// populateIndexMatches: function() {
	// 	indexMatches.forEach(function(integer) {
	// 		return hiddenArray.splice(integer, 1, guess);
	// 	});
	// },
	// showMatchingLetter: function() {
	// 	const position = this.toggleIntegerPositions();
	// 	if (position != -1) {
	// 		randomWord.map(function(match) {
	// 			if (match == guess) hiddenArray.splice(position, 1, guess);
	// 		});
	// 		document.getElementById("hideArray").innerHTML = hiddenArray;
	// 		console.log("position", position);
	// 		console.log("randomWord[position]: ", randomWord[position]);
	// 		console.log("updated hidden array: ", hiddenArray);
	// 	}
	// },
	// gameOver: function() {
	// 	if (guessRemaining < 1) {
	// 		const endGameMessage = document.getElementById("subtractGuessRemaining");
	// 		endGameMessage.textContent = "GAME OVER";
	// 	}
	// }
};

// const handlers = {
// 	setWordToArray: function() {
// 		document.getElementById(
// 			"convertToArray"
// 		).innerHTML = guessGameAction.setWordToArray();
// 	},
// 	hideArray: function() {
// 		window.addEventListener("pageshow", function(event) {
// 			document.getElementById(
// 				"hideArray"
// 			).innerHTML = guessGameAction.hideArray();
// 		});
// 	},
// 	logGuessInput: function() {
// 		window.addEventListener(
// 			"keypress",
// 			function(event) {
// 				if (event.keyCode) {
// 					guess.push(event.key);
// 					guessGameAction.logGuessInput();
// 					console.log("guess: ", guess);
// 				}
// 			},
// 			false
// 		);
// 		view.displayGuessGame();
// 	},
// 	addToGuessArray: function() {
// 		window.addEventListener(
// 			"keypress",
// 			function(event) {
// 				if (event.keyCode) {
// 					guessArray.push(event.key);
// 					guessGameAction.addToGuessArray();
// 					console.log("guessArray = ", guessArray);
// 				}
// 			},
// 			false
// 		);
// 		view.displayGuessGame();
// 	},
// 	subtractGuessRemaining: function() {
// 		window.addEventListener("keypress", function(event) {
// 			guessRemaining--;
// 			guessGameAction.subtractGuessRemaining();
// 		});
// 	},
// 	isLetterPresent: function() {
// 		window.addEventListener("keypress", function() {
// 			guessGameAction.isLetterPresent();
// 			guess = [];
// 		});
// 	},
// 	getAllIndexes: function() {
// 		window.addEventListener("keypress", function(event) {
// 			guessGameAction.getAllIndexes();
// 		});
// 	},
// 	populateIndexMatches: function() {
// 		window.addEventListener("keypress", function(event) {
// 			guessGameAction.populateIndexMatches();
// 		});
// 	},
// 	gameOver: function() {
// 		window.addEventListener("keypress", function(event) {
// 			if (guessRemaining < 1) {
// 				guessGameAction.gameOver();
// 			}
// 		});
// 		view.displayGuessGame();
// 	}
// };

// const view = {
// 	displayGuessGame: function() {
// 		// call(handlers())
// 	}
// };
guessGameAction.setWordToArray();

// guessGameAction.gameOver();
// handlers.logGuessInput();
// handlers.addToGuessArray();
// handlers.setWordToArray();
// handlers.hideArray();
// handlers.subtractGuessRemaining();
// handlers.gameOver();
// handlers.isLetterPresent();
// handlers.getAllIndexes();
// handlers.populateIndexMatches();

// function winGame
// function loseGame
// function resetGame
// function startMenu();