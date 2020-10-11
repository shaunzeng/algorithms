/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    // validate input
    if (!nums || nums.length == 0) return 0;
    if (nums.length == 1) return nums[0];
    if (nums.length == 2) return Math.max(nums[0], nums[1]);

    // create 2 arrays for 2 scenarios and calculate seperately
    let robFirst = [...nums];
    robFirst.pop(); // when we rob first house, we cannot rob the last one

    let robLast = [...nums];
    robLast.shift(); // when we rob last housue, we cannot rob the first one

    //define 2 dps for the 2 scenarios defined above
    let dp = new Array(robFirst.length).fill(0),
        dp2 = new Array(robLast.length).fill(0),
        max = -Infinity; // track max

    // initial values 
    dp[0] = robFirst[0];
    dp2[0] = robLast[0];
    max = Math.max(dp[0], dp2[0]);

    dp[1] = Math.max(dp[0], robFirst[1]);
    dp2[1] = Math.max(dp2[0], robLast[1]);
    max = Math.max(max, dp[1], dp2[1]);

    // loop through and update dip[i];
    // dp[i] = max(dp[i-2] + nums[i], dp[i-1]) for both scenarios
    for (let i = 2; i < nums.length - 1; i++) {
        dp[i] = Math.max(dp[i - 2] + robFirst[i], dp[i - 1]);
        dp2[i] = Math.max(dp2[i - 2] + robLast[i], dp2[i - 1]);
        max = Math.max(max, dp[i], dp2[i]);
    }

    // return max
    return max;
}