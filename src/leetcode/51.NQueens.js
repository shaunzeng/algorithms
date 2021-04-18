/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    const solutions = [];
    const grid = Arra.from(new Array(n), () => new Array(n).fill('.'));
    solveProblem(grid, 0, n, solutions);
    return solutions;
};

function solveProblem(grid, row, n, solutions) {
    if (row === n) {
        solutions.push(mergeArray(grid));
        return;
    }
    for (var col = 0; col < n; col++) {
        if (isValid(grid, row, col, n)) {
            grid[row][col] = 'Q';
            solveProblem(grid, row + 1, n, solutions);
            grid[row][col] = '.';
        }
    }
}

function isValid(grid, row, col, n) {
    for (var i = 0; i < row; i++) {
        if (grid[i][col] === 'Q') {
            return false;
        }
    }
    for (var i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
        if (grid[i][j] === 'Q') {
            return false;
        }
    }
    for (var i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
        if (grid[i][j] === 'Q') {
            return false;
        }
    }
    return true;
}

function mergeArray(arr) {
    var newArray = [];
    for (var i = 0; i < arr.length; i++) {
        newArray[i] = arr[i].join('');
    }
    return newArray;
}