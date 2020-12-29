/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */

var updateMatrix = function(matrix) {
    if (!matrix || matrix.length == 0) return [];

    let rows = matrix.length,
        cols = matrix[0].length,
        q = [];

    // turn matrix into a distance matirx, 
    // where each cell is the distance from nearest 0 to itself
    // for 0s, distance is 0 as 0 to 0 is 0 steps;
    // for 1s, distance is max!!!
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] == 0) {
                q.push([i, j]); // push all 0 to queue, to find distance to 1
            } else {
                matrix[i][j] = Number.POSITIVE_INFINITY; // assume 1s is max distance to 0;
            }
        }
    }

    let dir = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0]
    ]; // 4 direction neighbors;

    while (q.length !== 0) {
        let item = q.shift();

        // check 4 directions
        for (let i = 0; i < dir.length; i++) {
            let x = item[0] + dir[i][0],
                y = item[1] + dir[i][1];

            // if the new position is outside the matrix, or if its 0, we ignore it
            if (x < 0 || y < 0 || x >= rows || y >= cols) continue;

            // compare the new positon distance with curr spot distance + 1;
            // if new position distance is greater, replace it with curr distance + 1 (decrease);
            // and push the replaced spot to q, to compare with others
            if (matrix[x][y] > matrix[item[0]][item[1]] + 1) {

                // replace with shorter distance FIRST before pushing;
                matrix[x][y] = matrix[item[0]][item[1]] + 1;
                // push the new spot because the new spot might have impact on other spots that
                // have been visited;
                q.push([x, y]);
            }

        }
    }

    return matrix;
};