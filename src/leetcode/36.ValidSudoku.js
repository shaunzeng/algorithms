/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    if (!board || board.length === 0) return false;

    let rows = {},
        cols = {},
        boxes = {};

    for (let i = 0; i < 9; i++) {
        rows[i] = {};
        cols[i] = {};
        boxes[i] = {};
    }


    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const curr = board[i][j];

            if (curr !== '.') {

                const num = parseInt(curr),
                    boxIdx = getBoxIndex(i, j);


                rows[i][num] = (rows[i][num] === void 0 ? 0 : rows[i][num]) + 1;
                cols[j][num] = (cols[j][num] === void 0 ? 0 : cols[j][num]) + 1;
                boxes[boxIdx][num] = (boxes[boxIdx][num] === void 0 ? 0 : boxes[boxIdx][num]) + 1;

                if (rows[i][num] > 1 || cols[j][num] > 1 || boxes[boxIdx][num] > 1) {
                    return false;
                }
            }
        }
    }

    return true;
};


function getBoxIndex(row, col) {
    if (row <= 2 && col <= 2) return 0;
    else if (row <= 2 && col >= 3 && col <= 5) return 1;
    else if (row <= 2 && col >= 6 && col <= 8) return 2;
    else if (row >= 3 && row <= 5 && col <= 2) return 3;
    else if (row >= 3 && row <= 5 && col >= 3 && col <= 5) return 4;
    else if (row >= 3 && row <= 5 && col >= 6 && col <= 8) return 5;
    else if (row >= 6 && row <= 8 && col <= 2) return 6;
    else if (row >= 6 && row <= 8 && col >= 3 && col <= 5) return 7;
    else if (row >= 6 && row <= 8 && col >= 6 && col <= 8) return 8;
    return -1;
}