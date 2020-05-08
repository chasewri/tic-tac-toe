/*----- constants -----*/
let marker = -1;
let tieCounter = [];
const board = {
  div1: null,
  div2: null,
  div3: null,
  div4: null,
  div5: null,
  div6: null,
  div7: null,
  div8: null,
  div9: null,
};

/*----- app's state (variables) -----*/
let currentBoardArray = [];
/*----- cached element references -----*/
const div1 = document.querySelector('#div1');
const div2 = document.querySelector('#div2');
const div3 = document.querySelector('#div3');
const div4 = document.querySelector('#div4');
const div5 = document.querySelector('#div5');
const div6 = document.querySelector('#div6');
const div7 = document.querySelector('#div7');
const div8 = document.querySelector('#div8');
const div9 = document.querySelector('#div9');

/*----- event listeners -----*/
div1.addEventListener('click', function(){renderTurn(div1, tieCounter)}, { once: true });
div2.addEventListener('click', function(){renderTurn(div2, tieCounter)}, { once: true });
div3.addEventListener('click', function(){renderTurn(div3, tieCounter)}, { once: true });
div4.addEventListener('click', function(){renderTurn(div4, tieCounter)}, { once: true });
div5.addEventListener('click', function(){renderTurn(div5, tieCounter)}, { once: true });
div6.addEventListener('click', function(){renderTurn(div6, tieCounter)}, { once: true });
div7.addEventListener('click', function(){renderTurn(div7, tieCounter)}, { once: true });
div8.addEventListener('click', function(){renderTurn(div8, tieCounter)}, { once: true });
div9.addEventListener('click', function(){renderTurn(div9, tieCounter)}, { once: true });
/*----- functions -----*/
function openModal() {
  document.querySelector('#modal-id').style.display = 'block';
}

function checkWin (tieCounter) {
  for (const key in board) {
    currentBoardArray.push(board[key]);
  }
  console.log(currentBoardArray);
  const a = currentBoardArray.splice(0, 3);
  const b = currentBoardArray.splice(0, 3);
  const c = currentBoardArray.splice(0, 3);
  if (a[0] != null) {
    if (a[0] === b[0] && a[0] === c[0]) {
      forTheWin(a[0]);
    }
  }
  if (a[1] != null) {
    if (a[1] === b[1] && a[1] === c[1]) {
      forTheWin(a[1]);
    }
  }
  if (a[2] != null) {
    if (a[2] === b[2] && a[2] === c[2]) {
      forTheWin(a[2]);
    }
  }
  if (a[0] != null) {
    if (a[0] === b[1] && a[0] === c[2]) {
      forTheWin(a[0]);
    }
  }
  if (a[2] != null) {
    if (a[2] === b[1] && a[2] === c[0]) {
      forTheWin(a[0]);
    }
  }
  const reducer = (acc, cv) => acc + cv;
  const aRed = a.reduce(reducer);
  const bRed = b.reduce(reducer);
  const cRed = c.reduce(reducer);
  if (Math.abs(aRed) === 3) {
    forTheWin(aRed);
  }
  if (Math.abs(bRed) === 3) {
    forTheWin(bRed);
  }
  if (Math.abs(cRed) === 3) {
    forTheWin(cRed);
  }
  if (tieCounter.length === 8) {
    forTheWin(0);
  }
  currentBoardArray = [];
  tieCounter.push('why???????');
}
function renderTurn(cell, tieCounter) {
  let cellId = cell.id;
  const turnId = document.querySelector('#turn');
  if (marker === -1) {
    cell.innerHTML = 'O';
    board[cellId] = -1;
    marker = 1;
    turn.innerHTML = 'It is X\'s turn!';
  } else {
    cell.innerHTML = 'X';
    board[cellId] = 1;
    marker = -1;
    turn.innerHTML = 'It is O\'s turn!'
  }
  checkWin(tieCounter);
}
function forTheWin(winner) {
  winDiv = document.querySelector('#who-won');
  if (winner > 0) {
    winDiv.innerHTML = 'X wins the game!!!'
  }
  if (winner < 0) {
    winDiv.innerHTML = 'O wins the game!!'
  }
  if (winner === 0) {
    winDiv.innerHTML = 'The game ends in a boring tie!!'
  }
  openModal();
}
