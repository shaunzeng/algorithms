/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function(grid) {

    let N = grid.length,
        q = [];

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (grid[i][j] == 1) {
                q.push([i, j]);
            }
        }
    }

    if (q.length == 0 || q.length == N * N) return -1;

    let dir = [
            [0, 1],
            [0, -1],
            [1, 0],
            [-1, 0]
        ],
        distance = 0;

    while (q.length !== 0) {

        let size = q.length;

        while (size--) {
            let item = q.shift();

            for (let i = 0; i < dir.length; i++) {
                let x = item[0] + dir[i][0],
                    y = item[1] + dir[i][1];

                if (x < 0 || y < 0 || x >= N || y >= N || grid[x][y] == 'V') continue;
                grid[x][y] = 'V';
                q.push([x, y]);
            }
        }

        if (q.length <= 0) break;
        distance++;
    }

    return distance > 0 ? distance : -1;
};