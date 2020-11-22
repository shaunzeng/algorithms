/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    if (num == void 0) return [];
    if (num == 0) return [0];

    let dp = new Array(num + 1);

    dp[0] = 0;
    dp[1] = 1;

    for (let i = 2; i <= num; i++) {
        dp[i] = dp[Math.floor(i / 2)] + (i % 2);
    }

    return dp;
};