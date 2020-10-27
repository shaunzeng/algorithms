/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {

    s = '#' + s;
    p = '#' + p;

    let m = s.length,
        n = p.length,
        dp = Array.from(new Array(m), () => new Array(n).fill(false));

    dp[0][0] = true;

    for (let j = 1; j < n; j++) {
        if (p[j] == '*') {
            dp[0][j] = dp[0][j - 2]
        }
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {

            if (s[i] == p[j] || p[j] == '.') {
                dp[i][j] = dp[i - 1][j - 1];
            } else if (p[j] == '*') {
                dp[i][j] = dp[i][j - 2];

                if (s[i] == p[j - 1] || p[j - 1] == '.') {
                    dp[i][j] = dp[i][j] || dp[i - 1][j];
                }
            }
        }
    }

    return dp[m - 1][n - 1];
};