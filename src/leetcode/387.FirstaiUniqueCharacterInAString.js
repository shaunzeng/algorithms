/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    if (!s || s.length === 0) return -1;
    var freq = {};
    for (var i = 0; i < s.length; i++) {
        if (!freq[s[i]]) {
            freq[s[i]] = 1;
        } else { freq[s[i]]++; }
    }
    for (var j = 0; j < s.length; j++) {
        if (freq[s[j]] === 1) { return j; }
    }
    return -1;
};