/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    if (amount === 0) return 1;

    const dp = Array.from(new Array(coins.length + 1), () => new Array(amount + 1).fill(0));

    // to make up 0 amount, no matter what coin, there s always one way: to do nothing
    for (let i = 0; i <= coins.length; i++) {
        dp[i][0] = 1;
    }


    for (let i = 1; i <= coins.length; i++) {
        for (let j = 1; j <= amount; j++) {
            const currCoin = coins[i - 1],
                currAmount = j;

            if (currCoin > currAmount) {
                // if current coin is greater than current amount to make up
                // we simply copy from the previous coin value
                dp[i][j] = dp[i - 1][j];
            } else {
                // if current coin is less or equal than current amount
                //total ways should be both using current coin + not using current coin
                dp[i][j] = dp[i - 1][j] + dp[i][j - currCoin];
            }
        }
    }

    return dp[coins.length][amount]
};