/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    if (!nums || nums.length === 0) return nums;

    let i = 0;

    while (i < nums.length) {

        if (nums[i] === 0) {

            if (hasEnded(i, nums)) {
                break;
            }

            nums.splice(i, 1);
            nums.push(0)
        } else {
            i++;
        }
    };

    return nums
};

function hasEnded(i, nums) {
    return !nums.some((n, idx) => idx >= i && n !== 0);
}