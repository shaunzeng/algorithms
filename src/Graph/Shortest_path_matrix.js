var shortestPathBinaryMatrix = function(grid) {
    if (!grid || grid.length == 0 || grid[0][0] == 1) return -1;

    let N = grid.length,
        q = [],
        dir = [
            [0, 1],
            [0, -1],
            [1, 0],
            [-1, 0],
            [-1, -1],
            [1, -1],
            [-1, 1],
            [1, 1]
        ],
        steps = 0;

    q.push([0, 0]);
    grid[0][0] = -1;

    while (q.length !== 0) {

        let len = q.length;

        while (len--) {
            let item = q.shift();

            if (isTarget(item[0], item[1], N)) return ++steps;

            for (let i = 0; i < dir.length; i++) {
                let x = item[0] + dir[i][0],
                    y = item[1] + dir[i][1];

                if (x < 0 || y < 0 || x >= N || y >= N || grid[x][y] == 1 || grid[x][y] == -1) continue;

                grid[x][y] = -1;
                q.push([x, y]);
            }
        }

        steps++;

    }

    return -1;
};

function isTarget(x, y, N) {
    return x == y && y == (N - 1);
}