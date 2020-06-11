/**
 * @param {number[][]} A
 * @return {number}
 */
var shortestBridge = function(grid) {
    if (!grid || grid.length == 0 || grid[0].length == 0) return 0;

    let rows = grid.length,
        cols = grid[0].length,
        q = [],
        found = false;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] == 1 && !found) {
                found = true;
                dfs(grid, i, j, rows, cols, q);
            }
        }
    }

    return bfs(grid, q, rows, cols) - 1; // steps -1 equals num of flipped
};


function dfs(grid, i, j, rows, cols, q) {

    if (i < 0 || j < 0 || i >= rows || j >= cols || grid[i][j] == 0 || grid[i][j] == -1) return;

    grid[i][j] = -1;
    q.push([i, j]);

    dfs(grid, i, j - 1, rows, cols, q);
    dfs(grid, i, j + 1, rows, cols, q);
    dfs(grid, i - 1, j, rows, cols, q);
    dfs(grid, i + 1, j, rows, cols, q);
}


function bfs(grid, q, rows, cols) {
    let steps = 0,
        dir = [
            [0, 1],
            [0, -1],
            [-1, 0],
            [1, 0]
        ];

    while (q.length !== 0) {
        let len = q.length;

        while (len--) {
            let item = q.shift();

            for (let i = 0; i < dir.length; i++) {
                let x = item[0] + dir[i][0],
                    y = item[1] + dir[i][1];

                if (x < 0 || y < 0 || x >= rows || y >= cols || grid[x][y] == -1) continue;

                if (grid[x][y] == 1) return ++steps;

                grid[x][y] = -1;
                q.push([x, y]);

            }
        }

        steps++;
    }

    return -1;
}