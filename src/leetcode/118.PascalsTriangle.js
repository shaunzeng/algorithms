/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var res = [];

    for (var i = 0; i < numRows; i++) {
        res[i] = [];

        for (var j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                res[i].push(1);
            } else {
                res[i].push(res[i - 1][j - 1] + res[i - 1][j]);
            }
        }
    }

    return res;
};