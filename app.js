var readlineSync = require("readline-sync");

// console.log('X| |O')
// console.log('-----')
// console.log(' |X|O')
// console.log('-----')
// console.log('X| | ')

const board = [0, 0, 0, 0, 0, 0, 0, 0, 0];

// Wait for user's response.
for (let i = 0; i <= 8; i++) {
  if (i % 2 === 0) {
    questionX();
  } else questionO();
  if (didWin(2)) {
    return console.log(`X won`);
  }
  if (didWin(1)) {
    return console.log(`O won`);
  }
}

function insertX(playerMove) {
  board[playerMove] = 2;
}

function insertO(playerMove) {
  board[playerMove] = 1;
}

function questionO() {
  const coordinate = readlineSync.question("O move: ");
  console.log(`You placed an O on ${coordinate}`);
  let playerMove = coordinate - 1;

  insertO(playerMove);
  printWholeBoard();
}

function questionX() {
  const coordinate = readlineSync.question("X move: ");
  console.log(`You placed an X on ${coordinate}`);
  let playerMove = coordinate - 1;

  insertX(playerMove);
  printWholeBoard();
}

function didWin(Q) {
  if (board[0] === Q && board[1] === Q && board[2] === Q) {
    return true;
  } else if (
    board[3] === Q && // 345
    board[4] === Q && // 678
    board[5] === Q
  ) {
    // 012
    return true;
  } else if (board[6] === Q && board[7] === Q && board[8] === Q) {
    return true;
  } else if (board[0] === Q && board[3] === Q && board[6] === Q) {
    return true;
  } else if (board[1] === Q && board[4] === Q && board[7] === Q) {
    return true;
  } else if (board[2] === Q && board[5] === Q && board[8] === Q) {
    return true;
  } else if (board[0] === Q && board[4] === Q && board[8] === Q) {
    return true;
  } else if (board[2] === Q && board[4] === Q && board[6] === Q) {
    return true;
  }
}
didWin();

function printFirstLine(board) {
  let newBoard = [];
  // console.log(board[0])
  for (let i = 0; i <= 2; i++) {
    if (board[i] === 2) {
      newBoard.push(" X ");
    } else if (board[i] === 1) {
      newBoard.push(" O ");
    } else {
      newBoard.push("   ");
    }
  }
  console.log(newBoard.join(" "));
}

function printSecondLine(board) {
  let newBoard = [];
  // console.log(board[0])
  for (let i = 3; i <= 5; i++) {
    if (board[i] === 2) {
      newBoard.push(" X ");
    } else if (board[i] === 1) {
      newBoard.push(" O ");
    } else {
      newBoard.push("   ");
    }
  }
  console.log(newBoard.join(" "));
}

function printThirdLine(board) {
  let newBoard = [];
  // console.log(board[0])
  for (let i = 6; i <= 8; i++) {
    if (board[i] === 2) {
      newBoard.push(" X ");
    } else if (board[i] === 1) {
      newBoard.push(" O ");
    } else {
      newBoard.push("   ");
    }
  }
  console.log(newBoard.join(" "));
}

function printWholeBoard() {
  printFirstLine(board);
  printSecondLine(board);
  printThirdLine(board);
}
console.log("If you can read this than you have passed then you have passed the test");

//  X O O
//  O   X
//  X X O
