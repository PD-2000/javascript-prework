{
const playGame = function(playerInput){
	// Plays a round of RPS
	clearMessages();

	const getMoveName = function(argMoveId){
		// Checks CPU's/Player's choices
		if(argMoveId == 1)
			return 'kamień';
		else if(argMoveId == 2)
			return 'papier';
		else if(argMoveId == 3)
			return 'nożyce';
	}

	const displayResult = function(argComputerMove, argPlayerMove){
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
	const randomNumber = Math.floor(Math.random() * 3 + 1);
	//console.log('Wylosowana liczba to: ' + randomNumber);
	
	const computerMove = getMoveName(randomNumber);
	printMessage('Mój ruch to: ' + computerMove);

	// Player's move
	const playerMove = getMoveName(playerInput);
	printMessage('Twój ruch to: ' + playerMove);

	// Result
	displayResult(computerMove, playerMove);
}

// Event listeners
document.getElementById('play-rock').addEventListener('click', function(){playGame(1)});
document.getElementById('play-paper').addEventListener('click', function(){playGame(2)});
document.getElementById('play-scissors').addEventListener('click', function(){playGame(3)});
}