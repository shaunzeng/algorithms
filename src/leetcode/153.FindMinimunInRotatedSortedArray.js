/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if (!nums || nums.length === 0) return -1;
    if (nums.length < 2) return nums[0];
    let lo = 0,
        hi = nums.length - 1,
        min = +Infinity;

    // if the last element is greater than the first element then there is no rotation.
    // e.g. 1 < 2 < 3 < 4 < 5 < 7. Already sorted array.
    // Hence the smallest element is first element. nums[0]
    if (nums[hi] > nums[lo]) {
        return nums[0];
    }

    while (lo <= hi) {
        let mid = lo + Math.trunc((hi - lo) / 2);

        if (nums[mid] > nums[mid + 1]) {
            return nums[mid + 1];
        } else if (nums[mid - 1] > nums[mid]) {
            return nums[mid];
        }

        // if mid is greater than the first, it means mid is somwhere in the sorted half
        if (nums[mid] > nums[0]) {
            lo = mid + 1;
        } else {
            // if mid is less than the first, it means that mid is in the rotated half
            hi = mid - 1;
        }
    };

    return -1;
};