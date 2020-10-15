/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
// dp[i][j] means the max number of same nums we can draw line at A[0..i] and B[0...j]
// when A[i] == B[j] dp[i][j] = dp[i-1][j-1] + 1
// when A[i] !== B[j]  dp[i][J] = max(dp[i-1][j], dp[[i][j-1]])
var maxUncrossedLines = function(A, B) {
    // validate inputs
    if (!A || !B || A.length == 0 || B.length == 0) return 0;

    let m = A.length,
        n = B.length,
        dp = Array.from(new Array(m + 1), () => new Array(n + 1).fill(0));

    A.unshift('');
    B.unshift('');

    dp[0][0] = 0;

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (A[i] == B[j]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    return dp[m][n]

};