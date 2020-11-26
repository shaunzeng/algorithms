/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    if (!nums || nums.length === 0) return 0;

    let max = -Infinity;

    for (let i = 0; i < nums.length; i++) {

        let curr = nums[i],
            currMax = 1;

        if (curr === 1) {
            currMax = getMax(i, nums, false);
        } else {
            currMax = getMax(i + 1, nums, true) + 1;
        }

        max = Math.max(max, currMax);

    };


    return max;

};


function getMax(idx, nums, flipped) {
    let count = 0;

    for (let i = idx; i < nums.length; i++) {
        if (nums[i] === 1) {
            count++;
        } else if (nums[i] !== 1 && !flipped) {
            flipped = true;
            count++;
        } else if (nums[i] !== 1 && flipped) {
            break;
        }
    };

    return count;
}