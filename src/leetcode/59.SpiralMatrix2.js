/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {

    if (n == 0) return [];

    let matrix = Array.from(new Array(n), () => new Array(n).fill(0)),
        left = 0,
        right = n - 1,
        top = 0,
        bottom = n - 1,
        count = 1,
        size = n * n;

    while (count <= size) {

        for (let i = left; i <= right; i++) {
            matrix[top][i] = count;
            count++;
        }
        top++;

        for (let i = top; i <= bottom; i++) {
            matrix[i][right] = count;
            count++;
        }
        right--;

        for (let i = right; i >= left; i--) {
            matrix[bottom][i] = count;
            count++;
        }
        bottom--;

        for (let i = bottom; i >= top; i--) {
            matrix[i][left] = count;
            count++;
        }
        left++;

    }

    return matrix;

};