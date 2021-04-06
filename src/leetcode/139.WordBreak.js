var wordBreak = function(s, wordDict) {
    const words = new Set(wordDict);
    const dp = new Array(s.length + 1).fill(false);
    dp[0] = true;
    for (let i = 0; i < dp.length; i++) {
        if (dp[i]) {
            for (let j = i + 1; j <= s.length; j++) {
                let w = s.substring(i, j);
                if (words.has(w)) {
                    dp[j] = true;
                }
            }
        }
    }
    return dp[s.length];
};