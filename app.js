// FREEZE CODE BEGIN
// Puzzles to use to test your functions
//puzzle
let puzzle = [[ 8,9,5,   7,4,2,   1,3,6 ],
              [ 2,7,1,   9,6,3,   4,8,5 ],
              [ 4,6,3,   5,8,1,   7,9,2 ],

              [ 9,3,4,   6,1,7,   2,5,8 ],
              [ 5,1,7,   2,3,8,   9,6,4 ],
              [ 6,8,2,   4,5,9,   3,7,1 ],

              [ 1,5,9,   8,7,4,   6,2,3 ],
              [ 7,4,6,   3,2,5,   8,1,9 ],
              [ 3,2,8,   1,9,6,   5,4,7 ]];

//puzzle 2
let puzzleTwo = [[ 8,9,5,   7,4,2,   1,3,6 ],
                 [ 8,7,1,   9,6,3,   4,8,5 ],
                 [ 4,6,3,   5,8,1,   7,9,2 ],
                 [ 9,3,4,   6,1,7,   2,5,8 ],
                 [ 5,1,7,   2,3,8,   9,6,4 ],
                 [ 6,8,2,   4,5,9,   3,7,1 ],
                 [ 1,5,9,   8,7,4,   6,2,3 ],
                 [ 7,4,6,   3,2,5,   8,1,9 ],
                 [ 3,2,8,   1,9,6,   5,4,7 ]];
// FREEZE CODE END
// //grid [0,0] example
// let grid = [];
// for(let i = 0; i < 3; i++){
//   for(let j = 0; j < 3; j++){
//     grid.push(puzzle[i][j]);
//   }
// }

// console.log(grid);


function getRow(puzzle, row) {
// WRITE YOUR CODE HERE
//return elements of the sudoku row
return puzzle[row];

}

function getColumn(puzzle, col) {
// WRITE YOUR CODE HERE
let columnArr = [];
//return elements of the sudoku column
for(let i = 0; i < puzzle.length; i++){
  columnArr.push(puzzle[i][col]);
}
return columnArr;
}

function getSection(puzzle, x, y) {

// WRITE YOUR CODE HERE
  //grid generation algorithm for[x,y]

  //===========TOP Grids==================
  //if y is 0, loop outer from 0 to 2
  //grid [0,0]: loop inner from 0 to 2
  //grid [1,1]: loop inner from 3 to 5
  //grid [2,0]: loop inner from 6 to 8
  

  //===========MID Grids==================
  //if y is 1, loop outer is from 3 to 5
  //grid [0,1]: loop inner from 0 to 2
  //grid [1,1]: loop inner from 3 to 5
  //grid [2,1]: loop inner from 6 to 8
  
  

  //===========BOTTOM Grids================
  //if y is 2, loop outer from 6 to 8
  //grid [0,2]: loop inner from 0 to 2
  //grid [1,2]: loop inner from 3 to 5
  //grid [2,2]: loop inner from 6 to 8

  //loop limits for outer and inner
  let subGrid = [];
  let outerStart, outerEnd, innerStart, innerEnd;

  
  //condition for outer loop from 0 to 2
  if(y === 0){
    outerStart = 0; outerEnd = 2;
  }else if(y === 1){
    outerStart = 3; outerEnd = 5;
  }else if(y === 2){
    outerStart = 6; outerEnd = 8;
  }

  if(x === 0){
    innerStart = 0; innerEnd = 2;
  
  }else if(x === 1){
    innerStart = 3; innerEnd = 5;
  }else if(x === 2){
    innerStart = 6; innerEnd = 8;
  }
  
  for(let i = outerStart; i <= outerEnd; i++){
    for(let j = innerStart; j <= innerEnd ; j++){
      subGrid.push(puzzle[i][j]);
    }
  }

  return subGrid;
}


//check that array has 1 to 9 unique values
function includes1To9(subSection){
//check that the array actually has 9 digits
if (subSection.length !== 9){
  return false;
}

// Create a Set from the array.
const set = new Set(subSection);

// The array is unique if the Set size is the same as the array length.
return set.size === subSection.length;
}

function sudokuIsValid(puzzle) {

  //checkRows
// WRITE YOUR CODE HERE
let isRowValid = true;
for(let i = 0; i < puzzle.length; i++){
  if(includes1To9(getRow(puzzle, i)) === false){
    isRowValid = false;
    break;
  }
}
  
  //checkColumns
// WRITE YOUR CODE HERE
  let isColumnValid = true;
for(let i = 0; i < puzzle.length; i++){
  if(includes1To9(getColumn(puzzle, i)) === false){
    isColumnValid = false;
    break;
  }
}
  
  //checkSection
// WRITE YOUR CODE HERE
//iterate through possible section combinations
let isSectionValid = true;
for(let i = 0; i < 3; i++){
  for(let j = 0; j < 3; j++){
    if(includes1To9(getSection(puzzle, i, j)) === false){
      isSectionValid = false;
      break;
    }
  }
 }
    //only true if all sections are valid
    return isRowValid && isColumnValid && isSectionValid;
}


// TEST YOUR CODE HERE. SEE EXAMPLES SECTION FOR EXPECTED OUTPUT
// YOU CAN console.log THESE RESULTS TO SEE THE OUTPUT
getRow(puzzle, 8);
getRow(puzzle, 0);
getColumn(puzzle, 0);
getColumn(puzzle, 8);
getSection(puzzle, 0, 0);
getSection(puzzle, 1,0);




// FREEZE CODE BEGIN
module.exports = {
  getRow,
  getColumn,
  getSection,
  includes1To9,
  sudokuIsValid,
  puzzle,
  puzzleTwo
};
// FREEZE CODE END
