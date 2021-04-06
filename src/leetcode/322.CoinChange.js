/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// backpack problem

/*     amount  0 1 2 3 4 5 6 7 8 9 10 11
       coin    --------------------------
       0 |     0 0 0 0 0 0 0 0 0 0  0  0 
       1 |     0 1 2 3 4 5 6 7 8 9 10 11
     1,2 |     0 1 1 2 2 3 3 4 4 5  5  6 
   1,2,5 |     0 1 1 2 2 1 2 2 3 3  2  3
*/
var coinChange = function(coins, amount) {
    if (amount === 0) return 0;
    const dp = new Array(amount + 1).fill(+Infinity);
    dp[0] = 0;
    for (let i = 1; i <= amount; i++) {
        for (let j = 0; j < coins.length; j++) {
            const coin = coins[j],
                currAmount = i;
            if (coin <= currAmount) {
                dp[i] = Math.min(dp[i - coin] + 1, dp[i]);
            }
        }
    }
    return dp[amount] === +Infinity ? -1 : dp[amount]
};