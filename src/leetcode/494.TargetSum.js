/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */

// P is the subset that has all number with +,
// N is the subset that has all number with -,
// sum(P) - sum(N) = target
// =>  sum(P) + sum(P) = target + sum(N) + sum(P);
// => 2sum(P) = target + sum(Nums);
// => sum(P) = (target + sum(Nums))/2
// now the problem becomes, how many different subset can make up to sum(P);
// knapsack problem
// dp[i][j] = dp[i-1][j] + dp[i-1][j-currNumber];

var findTargetSumWays = function(nums, S) {
    if (!nums || nums.length == 0 || S == void 0) return 0;
    if (nums.length == 1 && (nums[0] == S || nums[0] == -S)) return 1;
    if (nums.length == 1 && (nums[0] !== S || nums[0] !== -S)) return 0;

    let sum = nums.reduce((a, b) => a + b, 0);
    if (-S < -sum || S > sum || ((sum + S) % 2 != 0)) return 0;



    let sumP = (S + sum) / 2;
    let dp = Array.from(new Array(nums.length + 1), () => new Array(sumP + 1).fill(0));

    dp[0][0] = 1;


    for (let i = 1; i <= nums.length; i++) {
        for (let j = 0; j <= sumP; j++) {
            let currNumber = nums[i - 1];

            if (currNumber == 0) {
                dp[i][j] = dp[i - 1][j] * 2;
            } else {
                if (j >= currNumber) {
                    dp[i][j] = dp[i - 1][j] + dp[i - 1][j - currNumber];
                } else {
                    dp[i][j] = dp[i - 1][j];
                }
            }
        }
    };


    return dp[nums.length][sumP];
};