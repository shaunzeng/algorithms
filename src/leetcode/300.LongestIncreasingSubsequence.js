/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    if (!nums || nums.length == 0) return 0;

    var len = nums.length,
        dp = new Array(len);

    for (var i = 0; i < len; i++) {
        dp[i] = 1;
    }

    for (var i = 1; i < len; i++) {
        for (var j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[j] + 1, dp[i])
            }
        }
    }

    return Math.max(...dp);
};