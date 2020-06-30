function playGame(playerInput) {

    clearMessages();

    function getMoveName(argMoveId) {
        if (argMoveId == 1) {
            return 'kamień';
        } else if (argMoveId == 2) {
            return 'papier';
        } else if (argMoveId == 3) {
            return 'nożyce';
        }
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
    }

    function displayResult(computerMove, playerMove) {
        if (computerMove == 'kamień' && playerMove == 'papier') {
            printMessage('Ty wygrywasz!');
        } else if (computerMove == 'nożyce' && playerMove == 'papier') {
            printMessage('Komputer wygrywa!');
        } else if (computerMove == 'kamień' && playerMove == 'nożyce') {
            printMessage('Komputer wygrywa!');
        } else if (playerMove == 'nieznany ruch') {
            printMessage('Nieznany ruch!');
        } else if (computerMove == 'papier' && playerMove == 'kamień') {
            printMessage('Komputer wygrywa!');
        } else if (computerMove == 'papier' && playerMove == 'nożyce') {
            printMessage('Ty wygrywasz!');
        } else if (computerMove == 'nożyce' && playerMove == 'kamień') {
            printMessage('Ty wygrywasz!');
        } else {
            printMessage('Remis!');
        }
    }

    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    let argComputerMove = getMoveName(randomNumber);

    printMessage('Mój ruch to: ' + argComputerMove);

    /* let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.'); */

    console.log('Gracz wpisał: ' + playerInput);

    let argPlayerMove = getMoveName(playerInput);

    displayResult(argComputerMove, argPlayerMove);
}

document.getElementById('play-rock').addEventListener('click', function () {
    playGame(1);
});

document.getElementById('play-paper').addEventListener('click', function () {
    playGame(2);
});

document.getElementById('play-scissors').addEventListener('click', function () {
    playGame(3);
});
