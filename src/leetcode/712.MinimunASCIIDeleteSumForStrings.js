/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
// dp[i][j] = when s1[i] == s2[j]  dp[i][j] = dp[i][j];
// dp[i][j] = when s1[i] !== s2[j]  dp[i][j] = min(dp[i-1][j] + s2[i], dp[i][j-1] + s2[j]);
// dp[i][j] means lowest ASCII sum of deleted characters when s1[0..i], and s2[0...j];
var minimumDeleteSum = function(s1, s2) {
    if (!s1 || !s2) return 0;

    let m = s1.length,
        n = s2.length,
        dp = Array.from(new Array(m + 1), () => new Array(n + 1).fill(0));

    s1 = '#' + s1;
    s2 = '#' + s2;

    dp[0][0] = 0;

    for (let i = 1; i <= m; i++) {
        dp[i][0] = dp[i - 1][0] + s1[i].charCodeAt(0);
    }

    for (let j = 1; j <= n; j++) {
        dp[0][j] = dp[0][j - 1] + s2[j].charCodeAt(0);
    }

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {

            if (s1[i] == s2[j]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.min(dp[i - 1][j] + s1[i].charCodeAt(0), dp[i][j - 1] + s2[j].charCodeAt(0));
            }
        }
    }

    return dp[m][n];
};