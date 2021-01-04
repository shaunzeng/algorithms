/**
 * @param {number[][]} grid
 * @return {number}
 */
// try to store strings as shapes, serialize all the visits while dfs, then add string
// to set, the duplicates will be ignored .
var numDistinctIslands = function(grid) {
    // x = start
    // o = out of bound or water
    // u = up
    // d = down
    // r = right
    // l = left;

    if (grid.length === 0 || !grid) return 0;

    const shapes = new Set(),
        n = grid.length,
        m = grid[0].length;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                let str = computeString(grid, i, j, n, m, 'x');
                shapes.add(str);
            }
        }
    }

    return shapes.size;
};


function computeString(grid, i, j, n, m, direction) {

    if (i < 0 || i > n - 1 || j < 0 || j > m - 1 || grid[i][j] !== 1) {
        return 'o';
    }

    grid[i][j] = 0;

    let up = computeString(grid, i - 1, j, n, m, 'u'),
        down = computeString(grid, i + 1, j, n, m, 'd'),
        left = computeString(grid, i, j - 1, n, m, 'l'),
        right = computeString(grid, i, j + 1, n, m, 'r');

    return direction + up + down + left + right;
}