/**
 * @param {number[]} prices
 * @return {number}
 */
// for this question, current state (dp[i]) is only determined directly by previous state (dp[i-1]);
var maxProfit = function(prices) {
    // validate inputs
    if (!prices || prices.length == 0) return 0;

    // break this problem down to 4 scenarios:
    // buy1, sell1, buy2, sell2
    // then we have 4 dps
    let buy1 = new Array(prices.length).fill(-Infinity), // buy1[i] = max profit when buying for prices[i] at first transaction
        sell1 = new Array(prices.length).fill(-Infinity), // sell[i] = max profit when first for prices[i] at first transaction
        buy2 = new Array(prices.length).fill(-Infinity), // buy2[i] = max profit when buying for prices[i] at second transaction
        sell2 = new Array(prices.length).fill(-Infinity), // sell2[i] = max profit when selling for prices[i]  at second transaction
        max = 0; // max tracker, 0 meaning the lease profit it to do nothing, no buying or selling , in case we end up having negative profit

    buy1[0] = -prices[0]; // to make sure we have a value to compare at starting point
    sell1[0] = -Infinity; // to make sure we are able to update it even its a negative profit
    buy2[0] = -Infinity; // to make sure we are able to update it even its a negative profit
    sell2[0] = -Infinity; // to make sure we are able to update it even its a negative profit


    for (let i = 1; i < prices.length; i++) {
        // buy1 is to compare between previous day buy1 max, with current day price
        // because we can only buy once for buy1
        // "-" means we spend money instead of profiting when buying
        buy1[i] = Math.max(buy1[i - 1], -prices[i]);

        // sell1 is to compare between preivous buy1 (money spent) + sell for current price (money gained), which is the profit,
        // and sell1[i-1], which means the stock has sold before currrent day.
        sell1[i] = Math.max(buy1[i - 1] + prices[i], sell1[i - 1]);

        // buy2 is to compare between previous sold(sell1) - current price (the second buy), and preivouly bought (for the second transaction)
        buy2[i] = Math.max(sell1[i - 1] - prices[i], buy2[i - 1]);

        // sell2 is to compare between previous buy2 + current price, and previous sold2
        sell2[i] = Math.max(buy2[i - 1] + prices[i], sell2[i - 1]);

        // update the max tracker
        max = Math.max(buy1[i], sell1[i], buy2[i], sell2[i], max);
    }

    return max;
};