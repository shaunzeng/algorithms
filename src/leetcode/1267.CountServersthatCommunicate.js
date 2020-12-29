/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function(grid) {
    if (!grid || grid.length == 0) return 0;

    let count = 0,
        total = 0,
        m = grid.length,
        n = grid[0].length;

    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] == 1) {
                count = 0;
                dfs(r, c, grid, m, n);

                if (count >= 2) {
                    total += count;
                }
            }
        }
    }

    function dfs(i, j, graph, m, n) {
        graph[i][j] = 0;
        count++;

        for (let k = 0; k < m; k++) {
            let x = k,
                y = j;

            if (graph[x][y] == 1) {
                dfs(x, y, graph, m, n);
            }
        }

        for (let f = 0; f < n; f++) {
            let x = i,
                y = f;

            if (graph[x][y] == 1) {
                dfs(x, y, graph, m, n);
            }
        }
    }

    return total;
};