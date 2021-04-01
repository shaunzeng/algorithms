/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    if (!height || height.length === 0) return 0;

    const ans = new Array(height.length).fill(0),
        n = height.length;

    for (let i = 1; i < n - 1; i++) {
        const maxLeft = getMax(0, i, height), // find max height on the left of current i
            maxRight = getMax(i, n, height), // find max height on the right of current i
            min = Math.min(maxLeft, maxRight), // find min height between left and right
            h = min - height[i]; // get the water height

        ans[i] = h >= 0 ? h : 0; // if its neg, set it to 0
    }

    return ans.reduce((acct, item, i) => {
            acct += item;
            return acct;
        }, 0) // sum up all the findings
};


function getMax(start, end, arr) {
    let max = 0;

    for (let i = start; i < end; i++) {
        max = Math.max(max, arr[i]);
    }

    return max;
}


// approach 2