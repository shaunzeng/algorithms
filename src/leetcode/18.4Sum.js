/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    if (!nums || nums.length < 4) return [];

    nums.sort((a, b) => a - b);
    const ans = [];

    for (let i = 0; i < nums.length - 3; i++) {
        // avoid duplicate
        if (i !== 0 && nums[i] === nums[i - 1]) continue;

        for (let j = i + 1; j < nums.length - 2; j++) {
            // avoid duplicate
            if (j !== i + 1 && nums[j] === nums[j - 1]) continue;

            const remain = target - nums[i] - nums[j];
            twoSum(j, remain, nums, ans, [nums[i], nums[j]]);
        }
    }

    return ans;
};


function twoSum(idx, target, nums, ans, curr) {

    let lo = idx + 1,
        hi = nums.length - 1;

    while (lo < hi) {
        if (nums[lo] + nums[hi] < target) {
            lo++;
        } else if (nums[lo] + nums[hi] > target) {
            hi--;
        } else {
            ans.push([...curr, nums[lo], nums[hi]]);
            lo++;
            hi--;

            // to avoid duplicate 
            while (lo < hi && nums[lo] === nums[lo - 1]) {
                lo++;
            }

        }
    }
}