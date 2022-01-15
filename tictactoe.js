let square = $('.square');
let tictactoeGrid = $('#tictactoe.Grid');
let player1 = 'X';
let player2 = 'O';


const squares = Array.from(document.getElementsByClassName("square"));
let winnerBanner = $('#winnerIsBanner');

let currentPlayer = player1;
const startGame = () => {

    squares.forEach(square => {
        square.addEventListener('click', squareClicked);
    });

    function squareClicked(i) {
        const id = i.currentTarget;
        squares[id] = currentPlayer;
        i.currentTarget.innerHTML = currentPlayer;
        if (winScenario(currentPlayer)) {
            return;
        }

        currentPlayer = currentPlayer === player1 ? player2 : player1;
    }

}

const winScenario = (currentPlayer) => {

    console.log(squares);
    if ($('.square.A1').text() === player1 && $('.square.A2').text() === player1 && $('.square.A3').text() === player1) {
        window.alert('Player 1 won');
        console.log(`${currentPlayer} has won`);
        
        return true;
    }
    else if ($('.square.A1').text() === player2 && $('.square.A2').text() === player2 && $('.square.A3').text() === player2) {
        window.alert('Player 2 won');
        console.log(`${currentPlayer} has won`);
        return true;
    }

    else if ($('.square.B1').text() === player1 && $('.square.B2').text() === player1 && $('.square.B3').text() === player1) {
        window.alert('Player 1 won');
        console.log(`${currentPlayer} has won`);
        return true;
    }
    else if ($('.square.B1').text() === player2 && $('.square.B2').text() === player2 && $('.square.B3').text() === player2) {
        window.alert('Player 2 won');
        console.log(`${currentPlayer} has won`);
        return true;
    }

    else if ($('.square.C1').text() === player1 && $('.square.C2').text() === player1 && $('.square.C3').text() === player1) {
        window.alert('Player 1 won');
        console.log(`${currentPlayer} has won`);
        return true;
    }
    else if ($('.square.C1').text() === player2 && $('.square.C2').text() === player2 && $('.square.C3').text() === player2) {
        window.alert('Player 2 won');
        console.log(`${currentPlayer} has won`);
        return true;
    }

    else if ($('.square.A1').text() === player1 && $('.square.B1').text() === player1 && $('.square.C1').text() === player1) {
        window.alert('Player 1 won');
        console.log(`${currentPlayer} has won`);
        return true;
    }
    else if ($('.square.A1').text() === player2 && $('.square.B1').text() === player2 && $('.square.C1').text() === player2) {
        window.alert('Player 2 won');
        console.log(`${currentPlayer} has won`);
        return true;
    }

    else if ($('.square.A2').text() === player1 && $('.square.B2').text() === player1 && $('.square.C2').text() === player1) {
        window.alert('Player 1 won');
        console.log(`${currentPlayer} has won`);
        return true;
    }
    else if ($('.square.A2').text() === player2 && $('.square.B2').text() === player2 && $('.square.C2').text() === player2) {
        window.alert('Player 2 won');
        console.log(`${currentPlayer} has won`);
        return true;
    }

    else if ($('.square.A3').text() === player1 && $('.square.B3').text() === player1 && $('.square.C3').text() === player1) {
        window.alert('Player 1 won');
        console.log(`${currentPlayer} has won`);
        return true;
    }
    else if ($('.square.A3').text() === player2 && $('.square.B3').text() === player2 && $('.square.C3').text() === player2) {
        window.alert('Player 2 won');
        console.log(`${currentPlayer} has won`);
        return true;
    }

    else if ($('.square.A1').text() === player1 && $('.square.B2').text() === player1 && $('.square.C3').text() === player1) {
        window.alert('Player 1 won');
        console.log(`${currentPlayer} has won`);
        return true;
    }
    else if ($('.square.A1').text() === player2 && $('.square.B2').text() === player2 && $('.square.C3').text() === player2) {
        window.alert('Player 2 won');
        console.log(`${currentPlayer} has won`);
        return true;
    }

    else if ($('.square.A3').text() === player1 && $('.square.B2').text() === player1 && $('.square.C1').text() === player1) {
        window.alert('Player 1 won');
        console.log(`${currentPlayer} has won`);
        return true;
    }
    else if ($('.square.A3').text() === player2 && $('.square.B2').text() === player2 && $('.square.C1').text() === player2) {
        window.alert('Player 2 won');
        console.log(`${currentPlayer} has won`);
        return true;
    }
};

restart.addEventListener("click", () => {
    squares.forEach((square) => {
        square.innerText = "";
    });
    currentPlayer = player1;
});
startGame ();

