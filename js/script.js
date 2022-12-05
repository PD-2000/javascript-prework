function playGame(playerInput){
	clearMessages();

	function getMoveName(argMoveId){
		// Checks CPU's/Player's choices
		if(argMoveId == 1)
			return 'kamień';
		else if(argMoveId == 2)
			return 'papier';
		else if(argMoveId == 3)
			return 'nożyce';
	}

	function displayResult(argComputerMove, argPlayerMove){
		// Decides the winner
		if(argComputerMove == argPlayerMove)
			printMessage('Remis');
		else if((argComputerMove == 'kamień' && argPlayerMove == 'nożyce') ||
				(argComputerMove == 'nożyce' && argPlayerMove == 'papier') ||
				(argComputerMove == 'papier' && argPlayerMove == 'kamień'))
			printMessage('Przegrywasz');
		else
			printMessage('Wygrywasz');
	}

	// CPU's move
	let randomNumber = Math.floor(Math.random() * 3 + 1);
	console.log('Wylosowana liczba to: ' + randomNumber);

	let computerMove = getMoveName(randomNumber);
	printMessage('Mój ruch to: ' + computerMove);

	// Player's move
	console.log('Gracz wpisał: ' + playerInput);
	playerMove = getMoveName(playerInput);

	printMessage('Twój ruch to: ' + playerMove);

	// Result
	displayResult(computerMove, playerMove);
}

// Event listeners
let playRock = document.getElementById('play-rock');
let playPaper = document.getElementById('play-paper');
let playScissors = document.getElementById('play-scissors');

playRock.addEventListener('click', playGame(1));
playPaper.addEventListener('click', playGame(2));
playScissors.addEventListener('click', playGame(3));