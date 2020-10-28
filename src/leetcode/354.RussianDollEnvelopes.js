/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
    if (!envelopes || envelopes.length == 0) return 0;

    envelopes.sort((a, b) => a[0] > b[0] ? 1 : -1);

    let dp = new Array(envelopes.length).fill(1),
        max = 1;

    for (let i = 1; i < envelopes.length; i++) {
        for (let j = 0; j < i; j++) {
            if (envelopes[i][0] > envelopes[j][0] && envelopes[i][1] > envelopes[j][1] && dp[i] <= dp[j]) {
                dp[i] = 1 + dp[j];
                max = Math.max(max, dp[i]);
            }
        }
    }
    return max
};