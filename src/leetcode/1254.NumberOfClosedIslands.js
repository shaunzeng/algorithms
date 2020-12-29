/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function(grid) {
    if (!grid || grid.legth == 0 || grid[0].length == 0) return 0;

    let m = grid.length,
        n = grid[0].length,
        count = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == 0 && dfs(grid, i, j, m, n)) {
                count++;
            }
        }
    }

    return count;
};

function dfs(grid, i, j, rows, cols) {

    if (grid[i][j] == 1 || grid[i][j] == -1) return true;

    // on Perimeter
    if (isBorder(i, j, rows, cols)) return false;

    grid[i][j] = -1;

    let left = dfs(grid, i, j - 1, rows, cols),
        right = dfs(grid, i, j + 1, rows, cols),
        up = dfs(grid, i - 1, j, rows, cols),
        down = dfs(grid, i + 1, j, rows, cols);

    return left && right && up && down;
}

function isBorder(i, j, rows, cols) {
    return i <= 0 || i >= rows - 1 || j <= 0 || j >= cols - 1
}