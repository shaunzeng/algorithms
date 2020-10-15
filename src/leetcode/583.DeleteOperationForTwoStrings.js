/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */

// this is equivelent to the another questions :"how many steps to delete letters so that we have a max length of matched subset"
var minDistance = function(word1, word2) {


    let n = word1.length,
        m = word2.length,
        dp = Array.from(new Array(n + 1), () => new Array(m + 1).fill(0));

    word1 = '#' + word1;
    word2 = '#' + word2;

    for (let i = 1; i <= n; i++) {
        dp[i][0] = dp[i - 1][0] + 1;
    }

    for (let j = 1; j <= m; j++) {
        dp[0][j] = dp[0][j - 1] + 1;
    }


    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {

            if (word1[i] == word2[j]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1);
            }
        }
    }

    return dp[n][m];
};