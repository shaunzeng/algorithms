/**
 * @param {number[][]} forest
 * @return {number}
 */
// bfs to find steps, then sum up all steps token
// step 1, sort all points so we know for each step, we start from what point and end at what point
var cutOffTree = function(forest) {
    if (!forest || forest.length === 0) return -1;

    const mapping = [];

    forest.forEach((row, i) => {
        row.forEach((cell, j) => {
            if (forest[i][j] > 0) {
                mapping.push([i, j, forest[i][j]]) // add all cells that are great than 0 
            }
        })
    });

    mapping.sort((a, b) => a[2] - b[2]); // sort by ascending order

    let total_steps = 0,
        startX = 0,
        startY = 0;

    for (let i = 0; i < mapping.length; i++) {
        let curr = mapping[i],
            endX = curr[0],
            endY = curr[1],
            steps = bfs(forest, startX, startY, endX, endY); // calculate steps needed from start point to end point

        if (steps < 0) return -1; // if we fail to go from start to end point, return -1

        total_steps += steps;

        startX = endX; // update starting point
        startY = endY;
    }

    return total_steps;

};


function bfs(forest, x0, y0, x1, y1) {

    let visited = new Set(),
        q = [],
        dir = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1]
        ];

    q.push([x0, y0, 0]); // 3rd value is the steps
    visited.add('' + x0 + y0);

    while (q.length !== 0) {

        const curr = q.shift();

        if (curr[0] === x1 && curr[1] === y1) return curr[2]; // if we found the target point, return the steps value

        for (let i = 0; i < 4; i++) {
            let newX = curr[0] + dir[i][0],
                newY = curr[1] + dir[i][1];

            if (newX < 0 ||
                newX >= forest.length ||
                newY < 0 ||
                newY >= forest[0].length ||
                forest[newX][newY] === 0 ||
                visited.has('' + newX + newY)) continue;

            visited.add('' + curr[0] + curr[1]);
            q.push([newX, newY, curr[2] + 1]); // increment steps by adding 1 on the steps value
        }
    }

    return -1; // if target point is not found, return -1
}