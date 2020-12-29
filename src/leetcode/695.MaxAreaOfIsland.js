/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {

    const m = grid.length,
        n = grid[0].length;
    let max = -Infinity;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                max = Math.max(max, dfs(i, j, m, n, grid));
            }
        }
    }

    return max > 0 ? max : 0;
};


function dfs(x, y, m, n, grid) {

    if (x < 0 || x > m - 1 || y < 0 || y > n - 1 || grid[x][y] !== 1) return 0;
    grid[x][y] = -1;

    return 1 + dfs(x - 1, y, m, n, grid) + dfs(x + 1, y, m, n, grid) + dfs(x, y + 1, m, n, grid) + dfs(x, y - 1, m, n, grid);
}