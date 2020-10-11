//198 House Robber
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    // validate input
    if (!nums || nums.length == 0) return 0;

    //define two state : rob current, not rub current
    let dp = new Array(nums.length).fill(0),
        dp2 = new Array(nums.length).fill(0),
        max = 0; // track max

    // initial states:
    dp[0] = nums[0];
    dp2[0] = 0;

    max = Math.max(max, dp[0], dp2[0]); // update max

    for (let i = 1; i < nums.length; i++) {
        // update dp[i], compare max , with the case of robbing current house
        dp[i] = Math.max(max, dp2[i - 1] + nums[i]);

        // update dp2[i], compare max, with the case of not robbing current house
        dp2[i] = Math.max(max, dp[i - 1]);

        // update max
        max = Math.max(max, dp[i], dp2[i]);
    }

    return max;
};