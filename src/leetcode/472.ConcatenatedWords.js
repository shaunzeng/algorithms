/**
 * @param {string[]} words
 * @return {string[]}
 */
// this solution will not pass in leetcode, as some test cases are too big, and too many recursions;
var findAllConcatenatedWordsInADict = function(words) {
    if (!words || words.length === 0) return [];

    const ans = [],
        dic = new Set(words);

    for (let i = 0; i < words.length; i++) {
        if (isConcat(words[i], dic)) {
            ans.push(words[i]);
        }
    }

    return ans;
};


function isConcat(word, dic) {
    for (let i = 1; i < word.length; i++) {
        let curr = word.substring(0, i),
            suffix = word.substring(i, word.length);
        if (dic.has(curr) && (dic.has(suffix) || isConcat(suffix, dic))) {
            return true;
        }
    }
    return false;
}



// approach #2
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findAllConcatenatedWordsInADict = function(words) {
    if (!words || words.length === 0) return [];

    const ans = [],
        dic = new Set(words);
    // loop thru words list

    words.forEach((w, i) => {
        // if a word is concatenated by words in dic
        // add it to the ans array
        if (isConcat(w, dic)) {
            ans.push(w);
        }
    });

    return ans;
};


function isConcat(word, dic) {
    if (word.length === 0) {
        return false
    };

    // delete current word, as ww should not consider current word is concatenated by itself.
    dic.delete(word);

    let len = word.length,
        dp = new Array(len + 1).fill(false); // a dp array which tracks at i index of a word, weather its concatanated or not
    // +1 is to make sure dp[0] is true, meaning '' is concatenated.

    dp[0] = true;

    for (let i = 1; i <= len; i++) {
        for (j = 0; j < i; j++) {
            // get the substring
            let w = word.substring(j, i);

            // if j position of the word is concatenated and the dictionary has its current substringa s word
            // that means at i position, the substring(0, i) is also concatenated
            // store in dp;
            // break is to break out of the j check, move to next i check
            if (dp[j] && dic.has(w)) {
                dp[i] = true;
                break;
            }
        }
    }

    // add the current word back to the dictionary
    dic.add(word);
    return dp[len]
}