/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    // filter words by existance
    return words.filter(word => exist(board, word));
};

function exist(board, word) {
    if (!board || board.length === 0) return false;
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            // check every letter to do dfs and see if the word can be found
            if (search(board, word, 0, i, j)) return true
        }
    }
    return false;
}

function search(board, word, index, x, y) {
    const m = board.length,
        n = board[0].length;
    // check if out of edges or letter does not match return false
    if (x < 0 || x >= m || y < 0 || y >= n || word[index] !== board[x][y]) return false;
    // if index is the word s length that means it passes all checks ,return true, meaning found
    if (index >= word.length - 1) return true;
    let curr = board[x][y];
    // change the letter to void reusing same letter;
    board[x][y] = '#';
    // check 4 directions, find at least 1 true,
    let ans = search(board, word, index + 1, x + 1, y) ||
        search(board, word, index + 1, x - 1, y) ||
        search(board, word, index + 1, x, y + 1) ||
        search(board, word, index + 1, x, y - 1);
    //!! very important, put it back so we can reuse the board;
    board[x][y] = curr;
    return ans;
}