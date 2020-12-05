/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function(board, click) {
    if (!board || board.length === 0 || board[0].length === 0 || !click || click.length == 0) return board;

    const x = click[0],
        y = click[1],
        n = board.length - 1,
        m = board[0].length - 1,
        clicked = board[x][y],
        dir = [
            [0, -1],
            [-1, -1],
            [-1, 0],
            [-1, 1],
            [0, 1],
            [1, 1],
            [1, 0],
            [1, -1]
        ];

    if (clicked === 'M') {
        board[x][y] = 'X';
    } else if (clicked === 'E') {
        flipAdjacents(x, y, n, m, board, dir);
    }


    return board;
};

function flipAdjacents(x, y, n, m, board, dir) {

    let minesCt = getMines(x, y, n, m, board, dir);

    if (minesCt === 0) {
        board[x][y] = 'B';

        dir.forEach(d => {
            const i = d[0],
                j = d[1];
            if (x + i >= 0 && x + i <= n && y + j >= 0 && y + j <= m && board[x + i][y + j] === 'E') {
                flipAdjacents(x + i, y + j, n, m, board, dir);
            }
        })

    } else {
        board[x][y] = minesCt.toString();
    }

}

function getMines(x, y, n, m, board, dir) {
    return dir.reduce((count, d) => {
        const i = d[0],
            j = d[1];

        if (x + i >= 0 && x + i <= n && y + j >= 0 && y + j <= m && board[x + i][y + j] === 'M') {
            count++;
        }

        return count;
    }, 0);
}