/**
 * @param {string[]} dictionary
 */
var ValidWordAbbr = function(dictionary) {
    this.dic = {};

    dictionary.forEach((word, i) => {
        const abbr = getAbbr(word);

        if (!this.dic[abbr]) {
            this.dic[abbr] = new Set();
        }

        this.dic[abbr].add(word);
    });
};

/** 
 * @param {string} word
 * @return {boolean}
 */
ValidWordAbbr.prototype.isUnique = function(word) {
    const abbr = getAbbr(word);
    const words = this.dic[abbr];

    return words === void 0 || (words.size === 1 && words.has(word));
};

function getAbbr(str) {
    if (str.length < 3) return str;

    return str[0] + (str.length - 2) + str[str.length - 1];
}

/** 
 * Your ValidWordAbbr object will be instantiated and called as such:
 * var obj = new ValidWordAbbr(dictionary)
 * var param_1 = obj.isUnique(word)
 */