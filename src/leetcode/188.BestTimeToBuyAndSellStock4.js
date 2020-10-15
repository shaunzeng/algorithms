/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
// cores of this problem:
// we need 2*k days to complete k transactions,

// if days are less then 2*k, that means we wont be able to do k transactions, 
//which also means that we can do how many ever transactions within the days (k doesnt matter anymore);

//if days are more than 2*k, that meanns we ll have to consider buy[i] , and sell[i] at kth time, its a 2 dimentional array for 2 states;
var maxProfit = function(k, prices) {
    // validate inputs
    if (!prices || !k || prices.length == 0) return 0;

    if (2 * k < prices.length) {
        return helper(k, prices);
    } else {
        return helper2(prices);
    }

};

//scenario where k matters
function helper(K, prices) {

    let buy = Array.from(new Array(prices.length), () => new Array(K + 1).fill(-Infinity)),
        sell = Array.from(new Array(prices.length), () => new Array(K + 1).fill(-Infinity)),
        max = 0;

    buy[0][0] = 0;
    sell[0][0] = -Infinity;

    buy[0][1] = -prices[0];
    sell[0][1] = -Infinity;


    for (let i = 1; i < prices.length; i++) {
        for (let k = 1; k <= K; k++) {
            buy[i][k] = Math.max(buy[i - 1][k], sell[i - 1][k - 1] - prices[i]);
            sell[i][k] = Math.max(sell[i - 1][k], buy[i - 1][k - 1] + prices[i]);
            max = Math.max(buy[i][k], sell[i][k], max);
        }
    }

    return max;

}


// scenario where k doesnt have impact on outcome
function helper2(prices) {
    let buy = new Array(prices.length).fill(-Infinity), // buy[i] = max profit when buying for current price
        sell = new Array(prices.length).fill(-Infinity), // sell[i] = max profit when selling for current price
        max = 0; // tracker

    buy[0] = -prices[0];
    sell[0] = -Infinity;

    for (let i = 1; i < prices.length; i++) {
        buy[i] = Math.max(buy[i - 1], -prices[i]);
        sell[i] = Math.max(buy[i - 1] + prices[i], sell[i - 1]);
        max = Math.max(max, buy[i], sell[i]);
    }

    return max;

}