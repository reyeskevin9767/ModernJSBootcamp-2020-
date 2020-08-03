//* For 1 Outer Loop, Run All The Inner Loop
for (let i = 1; i <= 10; i++) {
  console.log('Outer Loop: ', i);
  for (let j = 10; j >= 0; j -= 2) {
    console.log('   Inner Loop', j);
  }
}

// Results
// OUTER LOOP 1
//   INNER LOOP 10
//   INNER LOOP 8
//   INNER LOOP 6
//   INNER LOOP 4
//   INNER LOOP 2
//   INNER LOOP 0
// OUTER LOOP 2
//   INNER LOOP 10
//   INNER LOOP 8
//   INNER LOOP 6
//   INNER LOOP 4
//   INNER LOOP 2
//   INNER LOOP 0
// ...
// ...
// ...

for (let i = 0; i <= 5; i++) {
  console.log('Hi ');
  for (let j = 0; j <= 5; j++) console.log('World');
}

// Results
// Hi
// World
// World
// World
// World
// World
// World
// Hi
// World
// World
// World
// World
// World
// World
//...
//...

//* Loop Through Nested Loops With Nested For Loops
const gameBoard = [
  [4, 32, 8, 4],
  [64, 8, 32, 2],
  [8, 32, 16, 4],
  [2, 8, 4, 2],
];

//* Sum All The Elements
let totalScore = 0;
let gameBoardLength = gameBoard.length;

//* Outer loop iterates through the rows
for (let i = 0; i < gameBoardLength; i++) {
  let row = gameBoard[i];

  //*Inner loop iterates over each cell in a given row
  for (let j = 0; j < row.length; j++) {
    totalScore += row[j];
  }
}

console.log(totalScore);

const gameBoardTwo = [
  [4, 32, 8, 4, 4, 23],
  [64, 8, 32, 2, 56, 1],
  [8, 32, 16, 4, 7, 5],
];

//* Sum All The Elements
let totalScoreTwo = 0;
let allNums = 0;
let gameBoardLengthTwo = gameBoardTwo.length;

//*Outer loop iterates through the rows
for (let i = 0; i < gameBoardLengthTwo; i++) {
  let row = gameBoardTwo[i];

  //*Inner loop iterates over each cell in a given row
  for (let j = 0; j < row.length; j++) {
    totalScoreTwo += row[j];
    allNums++;
  }
}

average = totalScoreTwo / allNums;

console.log(totalScoreTwo); // 310
console.log(allNums); // 18
console.log(average); // 17.22222222222222
