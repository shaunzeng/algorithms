/**
 * @param {string} s
 * @return {string}
 */

// i is start index, j is end index, dp[i][j] = true when  dp[i+1][j-1] = true;
var longestPalindrome = function(s) {
    if (!s || s.length == 0) return "";
    if (s.length == 1) return s;

    let palin = s[0],
        dp = Array.from(new Array(s.length), () => new Array(s.length).fill(0));

    for (let i = 0; i < s.length; i++) {
        dp[i][i] = 1;
    }

    for (let k = 1; k <= s.length; k++) {
        for (let i = 0; i < s.length; i++) {
            let j = i + k;

            if (s[i] == s[j]) {

                if (k <= 1) {
                    dp[i][j] = 1;
                } else {
                    dp[i][j] = dp[i + 1][j - 1] == 1 ? 1 : 0;
                }

                if (dp[i][j] == 1) {
                    let newPalin = s.substring(i, j + 1);
                    palin = newPalin.length > palin.length ? newPalin : palin;
                }
            }
        }
    }

    return palin;
};