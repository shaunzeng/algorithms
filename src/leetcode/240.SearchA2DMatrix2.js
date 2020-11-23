/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) return false;

    let n = matrix.length,
        m = matrix[0].length,
        i = 0,
        j = m - 1;

    while (i < n && j >= 0) {
        let curr = matrix[i][j];

        if (target === curr) {
            return true;
        }

        if (target < curr) {
            j--;
        } else {
            i++;
        }
    }

    return false;
};