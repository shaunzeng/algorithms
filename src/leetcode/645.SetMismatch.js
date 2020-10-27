/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {

    if (!nums || nums.length == 0) return [];

    nums.sort((a, b) => a - b);

    let wrong = null,
        missing = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] == nums[i - 1]) {
            wrong = nums[i];
        } else if (nums[i] - nums[i - 1] > 1) {
            missing = nums[i - 1] + 1;
        }
    }

    return [wrong, nums[nums.length - 1] != nums.length ? nums.length : missing]
};