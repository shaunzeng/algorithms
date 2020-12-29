/**
 * @param {number[][]} A
 * @return {number}
 */
var shortestBridge = function(A) {

    let n = A.length,
        found = false;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (A[i][j] === 1 && !found) {
                found = true;
                dfs(i, j, n, A); // flip first island to -1;
                break;
            }
        }

        if (found) {
            break
        }
    }

    const q = [];

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (A[i][j] === 1) {
                q.push([i, j]); // collect second island positions as starting points and see who takes least steps to reach -1;
                A[i][j] = 8;
            }
        }
    }

    return bfs(q, A, n); // bfs till find the first flipped island postion (-1)
};

function bfs(q, grid, n) {
    let steps = 0,
        dir = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1]
        ];

    while (q.length) {

        const size = q.length;

        for (let i = 0; i < size; i++) {
            const curr = q.shift(); // always do shift, as we dont wanna mess with newly added items

            for (let k = 0; k < dir.length; k++) {
                const x = curr[0] + dir[k][0],
                    y = curr[1] + dir[k][1];

                if (x < 0 || x > n - 1 || y < 0 || y > n - 1 || grid[x][y] === 8) continue;

                if (grid[x][y] === -1) {
                    return steps;
                }

                grid[x][y] = 8;
                q.push([x, y]);
            }

        }
        steps++;
    }

    return -1;
}


function dfs(x, y, n, grid) {

    if (x < 0 || x > n - 1 || y < 0 || y > n - 1 || grid[x][y] !== 1) return;

    grid[x][y] = -1;

    dfs(x + 1, y, n, grid);
    dfs(x - 1, y, n, grid);
    dfs(x, y + 1, n, grid);
    dfs(x, y - 1, n, grid);
}