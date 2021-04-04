/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

// recursion
var exist = function(board, word) {

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === word[0] && dfs(i, j, board, word, 0)) {
                return true;
            }
        }
    }

    return false;
};


function dfs(x, y, board, word, idx) {
    if (idx === word.length) {
        return true;
    }

    if (x < 0 || x >= board.length || y < 0 || y >= board[0].length || board[x][y] !== word[idx]) return false;

    const tmp = board[x][y]; // store the value
    board[x][y] = 'XX'; // change value to avoid using the same letter more than once

    const result = dfs(x + 1, y, board, word, idx + 1) ||
        dfs(x - 1, y, board, word, idx + 1) ||
        dfs(x, y + 1, board, word, idx + 1) ||
        dfs(x, y - 1, board, word, idx + 1);

    board[x][y] = tmp; // put the value back by backtracking

    return result;
}