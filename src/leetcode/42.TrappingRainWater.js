/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    if (!height || height.length === 0) return 0;
    const ans = new Array(height.length).fill(0),
        n = height.length;
    for (let i = 1; i < n - 1; i++) {
        // find max height on the left of current i
        const maxLeft = getMax(0, i, height),
            // find max height on the right of current i
            maxRight = getMax(i, n, height),
            // find min height between left and right
            min = Math.min(maxLeft, maxRight),
            // get current water height
            h = min - height[i];

        // if its neg, set it to 0
        ans[i] = h >= 0 ? h : 0;
    }

    // sum up all the findings
    return ans.reduce((acct, item, i) => {
        acct += item;
        return acct;
    }, 0)
};

function getMax(start, end, arr) {
    let max = 0;
    for (let i = start; i < end; i++) {
        max = Math.max(max, arr[i]);
    }
    return max;
}