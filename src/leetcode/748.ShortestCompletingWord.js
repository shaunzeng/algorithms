/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function(licensePlate, words) {
    if (!licensePlate || !words) return '';

    let dic = {};
    for (let i = 0; i < licensePlate.length; i++) {
        let curr = licensePlate[i].toLowerCase();
        if (isValid(curr)) {
            dic[curr] = dic[curr] == void 0 ? 1 : dic[curr] + 1;
        }
    }

    let ans = null;

    for (let i = 0; i < words.length; i++) {
        let word = words[i],
            tmp = {...dic };

        for (let j = 0; j < word.length; j++) {
            let ch = word[j];

            if (tmp[ch] !== void 0) {
                tmp[ch]--;
                if (tmp[ch] <= 0) {
                    delete tmp[ch]
                }
            }
        };

        if (Object.keys(tmp).length == 0) {
            ans = ans == null ? word : ans.length <= word.length ? ans : word;
        }
    }

    return ans;
};

function isValid(str) {
    return /^[a-zA-Z]+$/.test(str);
}