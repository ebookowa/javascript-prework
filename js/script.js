{
    const playGame = function (playerInput) {

        clearMessages();

        function getMoveName(argMoveId) {
            if (argMoveId == 1) {
                return 'kamień';
            } else if (argMoveId == 2) {
                return 'papier';
            } else if (argMoveId == 3) {
                return 'nożyce';
            } else {
                printMessage('Nie znam ruchu o id ' + argMoveId + '.');
                return 'nieznany ruch';
            }
        }


        function displayResult(computerMove, playerMove) {
            if (computerMove == 'kamień' && playerMove == 'papier') {
                printMessage('Ty wygrywasz!');
                playerWins++;
            } else if (computerMove == 'nożyce' && playerMove == 'papier') {
                printMessage('Komputer wygrywa!');
                computerWins++;
            } else if (computerMove == 'kamień' && playerMove == 'nożyce') {
                printMessage('Komputer wygrywa!');
                computerWins++;
            } else if (playerMove == 'nieznany ruch') {
                printMessage('Nieznany ruch!');
            } else if (computerMove == 'papier' && playerMove == 'kamień') {
                printMessage('Komputer wygrywa!');
                computerWins++;
            } else if (computerMove == 'papier' && playerMove == 'nożyce') {
                printMessage('Ty wygrywasz!');
                playerWins++;
            } else if (computerMove == 'nożyce' && playerMove == 'kamień') {
                printMessage('Ty wygrywasz!');
                playerWins++;
            } else {
                printMessage('Remis!');
            }
        }

        const randomNumber = Math.floor(Math.random() * 3 + 1);

        // console.log('Wylosowana liczba to: ' + randomNumber);

        let argComputerMove = getMoveName(randomNumber);

        printMessage('Mój ruch to: ' + argComputerMove);

        /* let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.'); */

        // console.log('Gracz wpisał: ' + playerInput);

        let argPlayerMove = getMoveName(playerInput);

        displayResult(argComputerMove, argPlayerMove);

        console.log(playerWins, computerWins)
    }

    let computerWins = 0;
    let playerWins = 0;

    const rerunGame = function(){
        if ((computerWins > 4) || (playerWins > 4)) {
            clearMessages();
            printMessage("Wynik gracza: " + playerWins);
            printMessage("Wynik komputera: " + computerWins);
            if (computerWins == 5) {
                alert("Wygrywa komputer");
            } else {
                alert("Wygrywasz Ty");
            } 
            computerWins = 0;
            playerWins = 0;
        }
    }

    document.getElementById('play-rock').addEventListener('click', function () {
        playGame(1);
        rerunGame();
    });

    document.getElementById('play-paper').addEventListener('click', function () {
        playGame(2);
        rerunGame();
    });

    document.getElementById('play-scissors').addEventListener('click', function () {
        playGame(3);
        rerunGame();
    });
}
