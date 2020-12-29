/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {

    let count = 0,
        m = grid.length,
        n = grid[0].length;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1') {
                count++;
                dfs(i, j, grid);
            }
        }
    }

    return count;
};

function dfs(x, y, grid) {

    if (x < 0 || x > grid.length - 1 || y < 0 || y > grid[0].length - 1 || grid[x][y] !== '1') return;

    grid[x][y] = '-1';
    dfs(x + 1, y, grid);
    dfs(x - 1, y, grid);
    dfs(x, y + 1, grid);
    dfs(x, y - 1, grid);
}