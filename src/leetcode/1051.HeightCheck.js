/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    if (!heights || heights.length === 0) return 0;

    const sorted = [...heights].sort((a, b) => a - b);

    let count = 0;

    heights.forEach((h, i) => {
        if (h !== sorted[i]) {
            count++;
        }
    });

    return count;

};