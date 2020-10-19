/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function(s) {
    // validate inputs
    if (!s || s.length == 0) return 0;


    let m = s.length, // get length
        dp = Array.from(new Array(m), () => new Array(m).fill(0)); // create dp

    // scenario 1: k = 1;
    for (let i = 0; i < m; i++) {
        dp[i][i] = 0;
    }

    // scenario 2: k = 2
    for (let i = 0; i + 1 < m; i++) {
        dp[i][i + 1] = (s[i] == s[i + 1]) ? 0 : 1;
    }

    //scanerio 3: k >= 3
    for (let k = 3; k <= m; k++) {
        for (let i = 0; i + k - 1 < m; i++) {
            let j = i + k - 1;

            if (s[i] == s[j]) {
                // when i == j, meaning the insertion is depend on i+1 and j-1
                dp[i][j] = dp[i + 1][j - 1];
            } else {
                // when i != j, compare two scenarios, add to front or add to the back
                dp[i][j] = Math.min(dp[i + 1][j] + 1, dp[i][j - 1] + 1);
            }
        }
    }

    //return full word
    return dp[0][m - 1]

};


/*

a*****a
dp[i][j] = dp[i+1][j-1]

a*****b
dp[i][j] =
ba*****b  dp[i+1][j]
a*****ba dp[i][j-1]
*/