/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function(grid) {
    if (!grid || grid.legth == 0 || grid[0].length == 0) return 0;

    let rows = grid.length,
        cols = grid[0].length,
        numOfIslands = 0;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] == 0) {
                if (isClosed(grid, i, j, rows, cols)) {
                    numOfIslands++;
                }
            }
        }
    }

    return numOfIslands;
};

function isClosed(grid, i, j, rows, cols) {

    if (grid[i][j] == 1 || grid[i][j] == -1) return true;

    // on Perimeter
    if (i <= 0 || i >= rows - 1 || j <= 0 || j >= cols - 1) return false;


    grid[i][j] = -1;

    let left = isClosed(grid, i, j - 1, rows, cols),
        right = isClosed(grid, i, j + 1, rows, cols),
        up = isClosed(grid, i - 1, j, rows, cols),
        down = isClosed(grid, i + 1, j, rows, cols);

    return left && right && up && down;
}