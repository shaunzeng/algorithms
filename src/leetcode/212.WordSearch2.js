/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    return words.filter(word => exist(board, word));
};

function exist(board, word) {
    if (!board || board.length === 0) return false;

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (search(board, word, 0, i, j)) return true
        }
    }

    return false;
}


function search(board, word, index, x, y) {
    const m = board.length,
        n = board[0].length;

    if (x < 0 || x >= m || y < 0 || y >= n || word[index] !== board[x][y]) return false;

    if (index >= word.length - 1) return true;

    let curr = board[x][y];
    board[x][y] = '#';

    let ans = search(board, word, index + 1, x + 1, y) ||
        search(board, word, index + 1, x - 1, y) ||
        search(board, word, index + 1, x, y + 1) ||
        search(board, word, index + 1, x, y - 1);

    board[x][y] = curr;

    return ans;
}