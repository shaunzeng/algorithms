/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (!prices || prices.length == 0 || prices.length == 1) return 0;
    let min = prices[0],
        profit = 0;
    prices.forEach(price => {
        min = price < min ? price : min;
        profit = price - min > profit ? (price - min) : profit;
    });
    return profit;
};