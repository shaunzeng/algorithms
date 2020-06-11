//Given a 2D board containing 'X' and 'O' (the letter O), capture all regions surrounded by 'X'.

//A region is captured by flipping all 'O's into 'X's in that surrounded region.

var solve = function(board) {
    if (!board || board.length == 0) return board;

    let rows = board.length,
        cols = board[0].length;

    // change os on the boarder, and the ones connected to board to something else , e.g. G
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if ((i == 0 || j == 0 || i == rows - 1 || j == cols - 1) && board[i][j] == 'O') {
                dfs(board, i, j, rows, cols);
            }
        }
    }

    // flip all the remaining o to X, then flip G to o;
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