# Multiverse-Sudoku-Project

# Sudoku Checker Project
# Sudoku Solver
Sudoku is a logic puzzle played on a 9x9 grid subdivided into 9 3x3 sub-grids. The player is presented a partially filled puzzle, and must complete it following these rules:
Each row must contain the numbers 1-9 (no repeats!)
Each 3x3 sub-grid must contain the numbers 1-9 (no repeats!)
Each column must contain the numbers 1-9 (no repeats!)
# TASK: 
Your final sudoku checker function will be relatively complex. To build it, we’re going to write several simple functions that combine to perform a larger complex operation.
# Separation of Concerns
Separation of concerns is another programming design principle for separating a computer program into distinct sections. Each section addresses a separate concern, a set of information that affects the code of a computer program.
There are benefits to writing code with good separation of concerns. When describing the problem of sudoku in plain English, we split the puzzle into three rules. Separation of concerns leads to modular code. With modular code, individual sections can be re-used easily.
Modular code also allows you to improve or modify one section of code without having to know (or change) the details of other sections. This benefit, and the others listed, will become clearer as you write more, increasingly complex code.
# Debugging: 
Make sure to work on one function at a time! If you leave the code in an unfinished function, it could cause errors that prevent any tests from passing. If you want to “switch” to a different function but save your work, feel free to comment out your code in that function.
# Getting Started:
To start, write the following functions:
getRow: This function should accept two arguments:
A sudoku puzzle
A row index.
The function should return an array containing the numbers in the specified row.
getColumn: This function should accept two arguments:
A puzzle
A col (column) index.
The function should return an array containing the numbers in the specified column.
getSection: This function should accept three arguments:
A puzzle
An x coordinate for one of the puzzle’s 3x3 sub-grids.
A y coordinate for one of the puzzle’s 3x3 sub-grids.
The function should return an array with all the numbers in the specified sub-grid.
NOTE: Remember that our puzzle is broken into 9 sub-grids. In our coordinate system,
[0,0] will represent the sub-grid in the upper left
[1,0] will represent the upper-middle
[2,0] will represent the upper-right
[2,2] will represent the lower-right and so on.

# Examples

```
let puzzle = [[ 8,9,5,   7,4,2,   1,3,6 ],
              [ 2,7,1,   9,6,3,   4,8,5 ],
              [ 4,6,3,   5,8,1,   7,9,2 ],

              [ 9,3,4,   6,1,7,   2,5,8 ],
              [ 5,1,7,   2,3,8,   9,6,4 ],
              [ 6,8,2,   4,5,9,   3,7,1 ],

              [ 1,5,9,   8,7,4,   6,2,3 ],
              [ 7,4,6,   3,2,5,   8,1,9 ],
              [ 3,2,8,   1,9,6,   5,4,7 ]];


getRow(puzzle, 8);
// -> [ 3,2,8,1,9,6,5,4,7 ]

getRow(puzzle, 0);
// -> [ 8,9,5,7,4,2,1,3,6 ]

getColumn(puzzle, 0);
// -> [ 8,2,4,9,5,6,1,7,3 ]

getColumn(puzzle, 8);
// -> [ 6,5,2,8,4,1,3,9,7 ]

getSection(puzzle, 0, 0);
// -> [ 8,9,5,2,7,1,4,6,3 ]

getSection(puzzle, 1,0);
// -> [ 7,4,2,9,6,3,5,8,1 ]
```

# Completing the Sudoku Checker Function
# Part 1:
We now have functions that accept a sudoku grid and return specific subsections (getRow, getColumn, or getSection).
includes1To9: Now we need to write a function that will accept a subsection and check that it includes the numbers 1-9 (with no repeats). Write a function includes1to9 that takes in arr that accomplishes this. This function should return a boolean.
# Examples
includes1to9([1,2,3,4,5,6,7,8,9]) // => true
includes1to9([1,1,2,3,4,5,6,7,8]) // => false (no 9)
# Part 2:
With that function, you have all the parts you need to write your sudoku checker function.
sudokuIsValid: This function is to determine whether or not our sudoku puzzle has the values of 1-9 through each row and within each sub-grid with no repeats. The function will accept a sudoku puzzle and should return a boolean.
# Examples

```
let puzzle = [[ 8,9,5,   7,4,2,   1,3,6 ],
              [ 2,7,1,   9,6,3,   4,8,5 ],
              [ 4,6,3,   5,8,1,   7,9,2 ],

              [ 9,3,4,   6,1,7,   2,5,8 ],
              [ 5,1,7,   2,3,8,   9,6,4 ],
              [ 6,8,2,   4,5,9,   3,7,1 ],

              [ 1,5,9,   8,7,4,   6,2,3 ],
              [ 7,4,6,   3,2,5,   8,1,9 ],
              [ 3,2,8,   1,9,6,   5,4,7 ]];

sudokuIsValid(puzzle);
// => true

let puzzleTwo = [[ 8,9,5,  7,4,2,  1,3,6 ],
                 [ 8,7,1,  9,6,3,  4,8,5 ],
                 [ 4,6,3,  5,8,1,  7,9,2 ],

                 [ 9,3,4,  6,1,7,  2,5,8 ],
                 [ 5,1,7,  2,3,8,  9,6,4 ],
                 [ 6,8,2,  4,5,9,  3,7,1 ],

                 [ 1,5,9,  8,7,4,  6,2,3 ],
                 [ 7,4,6,  3,2,5,  8,1,9 ],
                 [ 3,2,8,  1,9,6,  5,4,7 ]];

sudokuIsValid(puzzleTwo);
// => false
```

