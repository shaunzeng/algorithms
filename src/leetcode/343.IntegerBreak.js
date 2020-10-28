/**
 * @param {number} n
 * @return {number}
 */

// break n down to a + b
// if a is the max product of its sub breakdown, and b is the max product of its sub breakdown, 
// we ll have n as its max product
//but if n = 2, you dont wanna break down to 1 + 1, as 2 is always greater than 1 when it multiplies
// if n = 3, you dont wanna break down to 1 + 2, as 3 is always greater when it multiplies
var integerBreak = function(n) {
    if (n == 2) return 1; // if n = 2, max is 1 as 2 can only be broken down to 1+1
    if (n == 3) return 2; // if n = 3, max is 2 as 3 can only be broken down to 1+2 or 1+1+1


    let dp = new Array(n + 1).fill(0);
    dp[2] = 2; // we dont break down 2 in dp, as 1*1 is deff less then 2
    dp[3] = 3; // we dont break down 3 in dp, as 1*2 is deff less then 3

    for (let i = 4; i <= n; i++) {
        for (let j = 2; j < i; j++) {
            dp[i] = Math.max(dp[i], dp[j] * dp[i - j]);
        }
    }

    return dp[n];

};