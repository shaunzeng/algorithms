/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    if (!nums || nums.length === 0) return -1;

    let lo = 0,
        hi = nums.length;
    while (lo < hi) {
        let mid = lo + Math.trunc((hi - lo) / 2);

        if (nums[mid] < nums[mid + 1]) {
            // when mid is smaller than right, move lo to mid+1
            lo = mid + 1;
        } else {
            // when mid is bigger than right, move hi to mid
            hi = mid;
        }
    }

    // when lo = hi, we found a peak, as we already move hi to left when small, and lo to right when big

    return hi;
};