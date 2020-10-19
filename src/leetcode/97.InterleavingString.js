/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */

//dp[i][j] means at i, j whether is
var isInterleave = function(s1, s2, s3) {
    if (s1.length + s2.length !== s3.length) return false;
    if (!s1 && (s2 !== s3)) return false;
    if (!s2 && (s1 !== s3)) return false;

    let m = s1.length,
        n = s2.length,
        dp = Array.from(new Array(m + 1), () => new Array(n + 1).fill(false));

    s1 = '#' + s1;
    s2 = '#' + s2;
    s3 = '#' + s3;

    dp[0][0] = true;

    for (let i = 1; i <= m; i++) {
        dp[i][0] = (s1[i] == s3[i] && dp[i - 1][0] == true);
    }

    for (let j = 1; j <= n; j++) {
        dp[0][j] = (s2[j] == s3[j] && dp[0][j - 1] == true);
    }


    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (s1[i] == s3[i + j] && dp[i - 1][j] == true) {
                dp[i][j] = true;
            } else if (s2[j] == s3[i + j] && dp[i][j - 1] == true) {
                dp[i][j] = true;
            }
        }
    }

    return dp[m][n]

};