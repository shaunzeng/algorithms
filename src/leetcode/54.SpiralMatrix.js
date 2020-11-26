/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if (!matrix || matrix.length === 0) return [];

    let left = 0,
        right = matrix[0].length - 1,
        top = 0,
        bottom = matrix.length - 1,
        size = matrix.length * matrix[0].length,
        ans = [];

    while (ans.length < size) {

        for (let i = left; i <= right && ans.length < size; i++) {
            ans.push(matrix[top][i]);
        }
        top++;

        for (let i = top; i <= bottom && ans.length < size; i++) {
            ans.push(matrix[i][right]);
        }
        right--;

        for (let i = right; i >= left && ans.length < size; i--) {
            ans.push(matrix[bottom][i]);
        }
        bottom--;

        for (let i = bottom; i >= top && ans.length < size; i--) {
            ans.push(matrix[i][left]);
        }
        left++;
    }


    return ans;
};