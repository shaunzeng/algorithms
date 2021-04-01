/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    if (!paragraph || !banned) return '';

    let words = paragraph.toLowerCase().split(/[ !?',;.]/).filter(w => w !== ''),
        ban = banned.reduce((acct, word) => { acct[word] = true; return acct }, {}),
        dic = {};

    for (let i = 0; i < words.length; i++) {
        let curr = words[i].toLowerCase();

        if (!ban[curr]) {

            if (!dic[curr]) {
                dic[curr] = 1;
            } else {
                dic[curr]++;
            }

        }
    }


    let keys = Object.keys(dic),
        values = Object.values(dic),
        max = -Infinity,
        idx = 0;

    keys.forEach((key, i) => {
        let tmp = max;
        max = Math.max(max, values[i]);

        if (max !== tmp) {
            idx = i;
        }
    });

    return keys[idx];
};