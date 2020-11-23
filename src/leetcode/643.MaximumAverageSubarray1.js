/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    var sum = 0,
        result = Number.NEGATIVE_INFINITY;

    for (var i = 0; i < nums.length; i++) {
        if (i < k) {
            sum += nums[i];
        } else {
            result = Math.max(sum, result);
            sum += nums[i] - nums[i - k];
        }
    }

    result = Math.max(sum, result);
    return result / k;

};