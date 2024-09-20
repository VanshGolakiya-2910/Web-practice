let turn = 1;
let board = [[], [], []];
let filled = {
  x: [],
  o: [],
};
let gameOver = false; // Game over flag

// Initialize the board with 0s
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    board[i][j] = 0;
  }
}

function checkWin(moveStep, currentState) {
  for (let i = 0; i < currentState.length; i++) {
    if (
      currentState.includes(currentState[i] + moveStep) &&
      currentState.includes(currentState[i] + 2 * moveStep)
    ) {
      return true;
    }
  }
  return false;
}

class WinCondition {
  constructor() {
    this.winner = false;
  }

  checkUp(cell) {
    return cell - 3 >= 0;
  }

  checkDown(cell) {
    return cell + 3 < 9;
  }

  checkLeft(cell) {
    return cell % 3 !== 0;
  }

  checkRight(cell) {
    return cell % 3 !== 2;
  }

  checkLeftDiagonal(cell) {
    return cell % 4 === 0;
  }

  checkRightDiagonal(cell) {
    return cell % 2 === 0 && this.checkUp(cell) && this.checkLeft(cell);
  }

  checkAllDirections(cell) {
    let checks = [];
    if (this.checkUp(cell)) checks.push(this.checkUp(cell));
    if (this.checkDown(cell)) checks.push(this.checkDown(cell));
    if (this.checkLeft(cell)) checks.push(this.checkLeft(cell));
    if (this.checkRight(cell)) checks.push(this.checkRight(cell));
    if (this.checkLeftDiagonal(cell)) checks.push(this.checkLeftDiagonal(cell));
    if (this.checkRightDiagonal(cell)) checks.push(this.checkRightDiagonal(cell));
    return checks;
  }

  determineWinner(cell, currentState) {
    let directions = this.checkAllDirections(cell);

    for (let direction of directions) {
      if (checkWin(-3, currentState) || checkWin(3, currentState) ||
          checkWin(-1, currentState) || checkWin(1, currentState) ||
          checkWin(4, currentState) || checkWin(2, currentState)) {
        return true;
      }
    }
    return false;
  }

  checkForWinner(cell, currentState) {
    if (this.determineWinner(cell, currentState)) {
      alert(`Player ${currentState === filled.x ? "X" : "O"} wins`);
      gameOver = true; // Set game over flag
    }
  }
}

function boxClick(id) {
  if (gameOver) return; // Prevent further moves after game is over

  let cellElement = document.getElementById(id);

  if (cellElement.innerHTML !== "") return; // Don't allow clicking on a filled cell

  let parts = id.split("-");
  let index = parseInt(parts[1]);
  let row = Math.floor(index / 3);
  let col = index % 3;
  
  if (turn % 2 === 1) {
    cellElement.innerHTML = "X";
    board[row][col] = "X";
    filled.x.push(index);
    new WinCondition().checkForWinner(index, filled.x);
  } else {
    cellElement.innerHTML = "O";
    board[row][col] = "O";
    filled.o.push(index);
    new WinCondition().checkForWinner(index, filled.o);
  }

  turn++;
}
