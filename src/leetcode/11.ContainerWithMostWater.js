/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    if (!height || height.length === 0) return 0;
    let len = height.length, // get length of array
        i = 0, // left end of sliding window
        j = len - 1, // right end of sliding window
        max = 0; // max that tracks max water
    while (i < j) {
        let h = Math.min(height[i], height[j]), // get the min of the two heights, cuz only lower height holds water
            w = j - i; // get the width by j - i
        max = Math.max(max, h * w); // update max water
        // always keep the higher end, and move the lower end pointer
        if (height[i] < height[j]) { // if left wall is low move left pointer
            i++;
        } else { // if right wall is low move right
            j--;
        }
    }
    return max; // return max
};