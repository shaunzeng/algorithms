/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    if (!words || !order) return false;

    const dic = getDictionary(order);

    for (let i = 0; i < words.length - 1; i++) {
        if (!inOrder(words[i], words[i + 1], 0, dic)) {
            return false
        }
    }

    return true;
};

function getDictionary(str) {
    const dic = {};
    for (let i = 0; i < str.length; i++) {
        dic[str[i]] = i;
    };
    return dic;
}

function inOrder(w1, w2, idx, dic) {
    if (!w1[idx] && !w2[idx]) {
        return true;
    } else if (!w1[idx] && w2[idx]) {
        return true;
    } else if (w1[idx] && !w2[idx]) {
        return false;
    }

    if (dic[w1[idx]] < dic[w2[idx]]) {
        return true;
    } else if (dic[w1[idx]] > dic[w2[idx]]) {
        return false;
    } else {
        return inOrder(w1, w2, idx + 1, dic);
    }
}