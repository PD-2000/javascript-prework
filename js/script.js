// Functions
function getMoveName(argMoveId){
	if(argMoveId == 1)
		return 'kamień';
	else if(argMoveId == 2)
		return 'papier';
	else if(argMoveId == 3)
		return 'nożyce';

	hint = 'Błąd: nie znam ruchu o id ' + argMoveId + '. Musisz wprowadzić liczbę 1, 2 lub 3.';
	return 'nieznany ruch';
}

function displayResult(argComputerMove, argPlayerMove){
	//console.log('moves:', argComputerMove, argPlayerMove);
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
/*
if(randomNumber == 1){
	computerMove = 'kamień';
}
else if(randomNumber == 2){
	computerMove = 'papier';
}
else{
	computerMove = 'nożyce';
}
*/
printMessage('Mój ruch to: ' + computerMove);

// Player's move
let playerMove = 'nieznany ruch';
let hint = 'Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.';

while(playerMove == 'nieznany ruch'){
	let playerInput = prompt(hint);
	console.log('Gracz wpisał: ' + playerInput);

	playerMove = getMoveName(playerInput);
	/*
	if(playerInput == '1'){
		playerMove = 'kamień';
	}
	else if(playerInput == '2'){
		playerMove = 'papier';
	}
	else if(playerInput == '3'){
		playerMove = 'nożyce';
	}
	else{
		hint = 'Błąd: musisz wprowadzić liczbę 1, 2 lub 3.';
	}
	*/
}
printMessage('Twój ruch to: ' + playerMove);

// Result
displayResult(computerMove, playerMove);
/*
if(computerMove == playerMove){
	printMessage('Remis');
}
else if((computerMove == 'kamień' && playerMove == 'nożyce') ||
		(computerMove == 'nożyce' && playerMove == 'papier') ||
		(computerMove == 'papier' && playerMove == 'kamień')){
	printMessage('Przegrywasz');
}
else{
	printMessage('Wygrywasz');
}
*/