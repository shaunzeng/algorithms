/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    if (!nums || nums.length === 0) return [-1, -1];

    let lo = 0,
        hi = nums.length - 1,
        ans = [-1, -1],
        mid = 0;

    while (lo <= hi) {

        mid = lo + Math.trunc((hi - lo) / 2);

        if (nums[mid] === target) {
            ans[0] = mid;
            hi = mid - 1;
        } else if (nums[mid] < target) {
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }

    }

    lo = 0, hi = nums.length - 1, mid = 0;

    while (lo <= hi) {
        mid = lo + Math.trunc((hi - lo) / 2);

        if (nums[mid] === target) {
            ans[1] = mid;
            lo = mid + 1;
        } else if (nums[mid] < target) {
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }

    }


    return ans;
};