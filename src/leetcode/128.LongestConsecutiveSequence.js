/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (!nums || nums.length == 0) return 0;

    let h = new Map(),
        max = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        const curr = nums[i];

        if (h.has(curr)) continue; // means its a duplicate number

        const l = h.get(curr - 1) || 0, // see if left has length, or set it to 0;
            r = h.get(curr + 1) || 0, // see if right has length, or set it to 0;
            len = l + r + 1; // new length

        if (l > 0 & r > 0) {
            // if both left and right have length, update all three in hash
            h.set(curr - l, len);
            h.set(curr + r, len);
            h.set(curr, len);
        } else if (l > 0 && r === 0) {
            // if left has length, update 2 boundaries
            h.set(curr - l, len);
            h.set(curr, len);
        } else if (r > 0 && l === 0) {
            // if right has length, update 2 boundaries
            h.set(curr + r, len);
            h.set(curr, len);
        } else {
            // if either has length, its length is 1, and store in hash;
            h.set(curr, len);
        }

        //track the max;
        max = Math.max(max, len);

    }

    return max;

};