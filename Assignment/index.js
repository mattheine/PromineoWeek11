//select all the cells of the grid
const cellElements = document.querySelectorAll("[data-cell");
//variable to determine whos turn
let xTurn;
//create player variables associated with css class
const playerX = "x";
const playerCircle = "circle";
//creaate an array for all of winning combinations
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [6, 3, 0],
  [0, 4, 8],
];
const winnerElement = document.getElementById(winnerMessage);
const winningMessageText = document.querySelector("[data-winnerMessageText]");
//variable for play Again button
const playAgain = document.getElementById("playAgain");

startGame();

playAgain.addEventListener("click", startGame);

function startGame() {
  xTurn = false;
  //add event listener for click on cell - only allow it to happen once
  cellElements.forEach((cell) => {
    cell.addEventListener("click", handleClick, { once: true });
  });
  //restart eveerything for new game
  $("winning-message").removeClass("show");
}

function handleClick(element) {
  //set variable of clicked on cell
  const cell = element.target;
  //set class variable depending on player turn
  const currentClass = xTurn ? playerX : playerCircle;
  //place mark
  placeMark(cell, currentClass);
  //check for win
  if (checkWin(currentClass)) {
    gameOver(false);
    //check for draw
  } else if (isDraw()) {
    gameOver(true);
  }
  //switch turn
  else {
    changeTurn();
  }
}

//function to add css class to clicked cell
function placeMark(cell, currentClass) {
  cell.classList.add(currentClass);
  console.log(currentClass);
}
// setting the opposite of xTurn to swap currentClass
function changeTurn() {
  xTurn = !xTurn;
}
//check to see if all of the winning combos match the current combos
function checkWin(currentClass) {
  return winningCombinations.some((combinations) => {
    return combinations.every((i) => {
      return cellElements[i].classList.contains(currentClass);
    });
  });
}

//Function to check for winner or tie
function gameOver(draw) {
  if (draw) {
    winningMessageText.innerHTML = "You tied! Play Again!";
  } else {
    winningMessageText.innerHTML = `${
      xTurn ? "X has won the game!" : "O has won the game!"
    }`;
    $(".winning-message").attr("class", "show");
  }
}

//function for a draw -check that every cell has been filled
function isDraw() {
  //neded to destructure cell elements into array first in order to call every method [...]
  return [...cellElements].every((cell) => {
    return (
      cell.classList.contains(playerX) || cell.classList.contains(playerCircle)
    );
  });
}
