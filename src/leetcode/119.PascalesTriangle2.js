/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if (rowIndex === 0) return [1];

    let prev = [1],
        curr;

    for (let i = 1; i <= rowIndex; i++) {

        curr = new Array(i + 1).fill(0);

        for (let j = 0; j < curr.length; j++) {

            if (j === 0 || j === curr.length - 1) {
                curr[j] = 1;
            } else {
                curr[j] = prev[j - 1] + prev[j];
            }
        }

        prev = curr;
    };

    return curr;
};