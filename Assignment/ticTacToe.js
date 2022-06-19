//player Variables associateed with CSS class
const playerX = "x";
const playerCircle = "circle";
//array of all winning combinations
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
//select all cells of the grid
const cellElements = document.querySelectorAll("[data-cell]");
//variable for winner message div
const winnerElement = document.getElementById('winnerMessage');
//variable for play Again button
const playAgain = $("#playAgain");
//variable to define winner message
const winningMessageTextElement = document.querySelector(
  "[data-winnerMessageText]"
);
// variable to determine whos turn
let xTurn;

//call startGame function
startGame();
//on button click restart game
playAgain.on("click", startGame);

function startGame() {
  xTurn = false;
  //add event listener for  each cell to be clicked on only once and reset class for each cell
  cellElements.forEach((cell) => {
    cell.classList.remove(playerX);
    cell.classList.remove(playerCircle);
    cell.removeEventListener("click", handleClick);
    cell.addEventListener("click", handleClick, { once: true });
  });
  //removes winner message
  $('#winnerMessage').removeClass('show');
}

function handleClick(element) {
  //sets variable of clicked on cell
  const cell = element.target;
  //defines class variable dependent on player turn
  const currentClass = xTurn ? playerX : playerCircle;
  //place mark on board
  placeMark(cell, currentClass);
  //check for win
  if (checkWin(currentClass)) {
    gameOver(false);
    //check for draw
  } else if (isDraw()) {
    gameOver(true);
    //switch turn
  } else {
    changeTurn();
  }
}

//function to check for winner or tie
function gameOver(draw) {
  if (draw) {
    winningMessageTextElement.innerText = "You Tied! Play Again!";
  } else {
    winningMessageTextElement.innerText = `${xTurn ? "X" : "O"} Wins!`;
  }
  winnerElement.classList.add("show");
}

//function for a draw->checks to see if every cell has been filled
function isDraw() {
    //needed to destructure cellElements into array in order to call .every method
  return [...cellElements].every((cell) => {
    return (
      cell.classList.contains(playerX) || cell.classList.contains(playerCircle)
    );
  });
}

//function to add CSS class to clicked on cell
function placeMark(cell, currentClass) {
  cell.classList.add(currentClass);
  console.log(currentClass);
}

//setting the opposite of xTurn to swap currentClass
function changeTurn() {
  xTurn = !xTurn;
}

//check to see if all of winning combos match the current combos
function checkWin(currentClass) {
  return winningCombinations.some((combination) => {
    return combination.every((index) => {
      return cellElements[index].classList.contains(currentClass);
    });
  });
}
