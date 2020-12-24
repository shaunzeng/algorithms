/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    if (!nums || nums.length === 0) return -1;

    let lo = 1,
        hi = nums.length - 1,
        mid = null,
        count = 0;

    while (lo < hi) {
        count = 0;
        mid = lo + Math.trunc((hi - lo) / 2);

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] >= mid) count++;
        }


        if (count > (nums.length - 1) - mid + 1) {
            lo = mid;
        } else {
            hi = mid - 1;
        }

    }

    return lo;
};