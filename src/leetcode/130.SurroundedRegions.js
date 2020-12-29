/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    if (!board || board.length == 0) return board;

    let rows = board.length,
        cols = board[0].length;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if ((i == 0 || j == 0 || i == rows - 1 || j == cols - 1) && board[i][j] == 'O') {
                dfs(board, i, j, rows, cols);
            }
        }
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (board[i][j] == 'O') {
                board[i][j] = 'X';
            } else if (board[i][j] == 'G') {
                board[i][j] = 'O';
            }
        }
    }

    return board;
};


function dfs(grid, i, j, rows, cols) {

    if (i < 0 || j < 0 || i >= rows || j >= cols || grid[i][j] !== 'O') {
        return;
    }

    grid[i][j] = 'G';

    dfs(grid, i, j - 1, rows, cols);
    dfs(grid, i, j + 1, rows, cols);
    dfs(grid, i - 1, j, rows, cols);
    dfs(grid, i + 1, j, rows, cols);
}