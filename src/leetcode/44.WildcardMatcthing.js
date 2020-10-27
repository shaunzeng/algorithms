/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {

    s = '#' + s;
    p = '#' + p;

    let m = s.length,
        n = p.length;

    let dp = Array.from(new Array(m), () => new Array(n).fill(false));

    dp[0][0] = true;
    for (let i = 1; i <= n; i++) {
        if (p[i] !== '*') break;
        dp[0][i] = true;
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {

            if (s[i] == p[j] || p[j] == '?') {
                dp[i][j] = dp[i - 1][j - 1];
            } else if (p[j] == '*') {

                for (let k = 0; k <= i; k++) {
                    if (dp[k][j - 1] == true) {
                        dp[i][j] = true;
                        break;
                    }
                }
            }
        }
    }

    return dp[m - 1][n - 1];

};