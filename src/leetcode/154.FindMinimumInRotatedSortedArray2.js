/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {

    let lo = 0,
        hi = nums.length - 1,
        pivot = null;
    while (lo < hi) {
        pivot = lo + Math.trunc((hi - lo) / 2);

        if (nums[pivot] < nums[hi]) {
            hi = pivot
        } else if (nums[pivot] > nums[hi]) {
            lo = pivot + 1;
        } else {
            hi -= 1;
        }
    };

    return nums[lo]
};