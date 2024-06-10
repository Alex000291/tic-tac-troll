//game variables
let board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]

let currentPlayer = 1;
let gameover = false;
player1win = 0;
player2win = 0;
trollthresh = 3;


document.addEventListener("keydown", quicktroll);


//game logic

 const cellElements = document.querySelectorAll('.cell');
 cellElements.forEach((cell, index) => {
    cell.addEventListener("click", () => {
      placeMarker(index);
    });
  });

  function placeMarker(index) {
    let row = Math.floor(index / 3);
    let col = index % 3;

    // Check if the cell is already filled
    if (board[row][col] !== 0) {
        return;
    }
    
    let tile = document.getElementById(index.toString());

    if(currentPlayer === 1) {
        tile.classList.add("cross");
        board[row][col] = 1;
    } else if(currentPlayer === -1) {
        tile.classList.add("circle");
        board[row][col] = -1;
    }

    // Switch player
    currentPlayer *= -1;

    checkgameover();
    checkTie();
    checktroll()
}

function checkgameover() {
    if (board[0][0] === board[0][1] && board[0][1] === board[0][2] && board[0][0] !== 0 ||
        board[1][0] === board[1][1] && board[1][1] === board[1][2] && board[1][0] !== 0 ||
        board[2][0] === board[2][1] && board[2][1] === board[2][2] && board[2][0] !== 0 ||
        board[0][0] === board[1][0] && board[1][0] === board[2][0] && board[0][0] !== 0 ||
        board[0][1] === board[1][1] && board[1][1] === board[2][1] && board[0][1] !== 0 ||
        board[0][2] === board[1][2] && board[1][2] === board[2][2] && board[0][2] !== 0 ||
        board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== 0 ||
        board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] !== 0) {
        gameover = true;
        alert("Player " + currentPlayer + " wins!");
        gamover = true;
        displayMessage()
        
        
        if (currentPlayer === 1) {
            player1win++;
            console.log(player1win);
        } else if (currentPlayer === -1) {
            player2win++;
            console.log(player2win);
        }


    }
}


function checkTie() {
    if (!gameover) {
        let isTie = true;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[i][j] === 0) {
                    isTie = false;
                }
            }
        }
        if (isTie) {
            alert("It's a tie!");
            gameover = true;
            displayMessage()
        }
    }
}




function displayMessage() {
    let message = document.getElementById("message");
    message.textContent = "play again?";
    message.addEventListener("click", () => {
        resetGame();
    })

function resetGame() {
    board = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];
    currentPlayer = 1;
    gameover = false;
    cellElements.forEach((cell) => {
        cell.classList.remove("cross");
        cell.classList.remove("circle");
    });
    let message = document.getElementById("message");
    message.textContent = "";
}
}

function checktroll() { 
    if(player1win >= trollthresh || player2win >= trollthresh) {
        clearBoardClasses()
         // Create a new div element
         let div = document.createElement('div');
         let message = document.createElement("div"); // Change "message" to "div"
 
         // Set the id of the div
         div.id = 'troll';
         message.id = 'message';
 
         // Set the width and height of the div
         div.style.width = '100vh';
         div.style.height = '100vh';
 
         // Set the background image of the div
         div.style.backgroundImage = "url('troll.jpg')";
         message.textContent = "you are trolled!";
 
         // Add the div and the message to the body
         document.body.appendChild(div);
         document.body.appendChild(message); // Add the message to the body
    }
}


function clearBoardClasses() {
    for (let i = 0; i < 9; i++) {
        let tile = document.getElementById(i.toString());
        if (tile) {
            tile.parentNode.removeChild(tile);
        }
    }
    section = document.getElementById("section")
    section.remove()
    message = document.getElementById("message")
    message.remove()

}





function quicktroll(event) {
    if (event.keyCode === 84) {
        clearBoardClasses();

        // Create a new div element
        let div = document.createElement('div');
        let message = document.createElement("div"); // Change "message" to "div"

        // Set the id of the div
        div.id = 'troll';
        message.id = 'message';

        // Set the width and height of the div
        div.style.width = '100vh';
        div.style.height = '100vh';

        // Set the background image of the div
        div.style.backgroundImage = "url('troll.jpg')";
        message.textContent = "you are trolled!";

        // Add the div and the message to the body
        document.body.appendChild(div);
        document.body.appendChild(message); // Add the message to the body
    }
}