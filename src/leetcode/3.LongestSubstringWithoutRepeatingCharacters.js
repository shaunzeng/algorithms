/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length === 0) return 0;

    var map = {};
    var max = 0;

    for (var i = 0, j = 0; i < s.length; i++) {
        if (map[s[i]] !== void 0) {
            j = Math.max(j, map[s[i]] + 1);
        }

        map[s[i]] = i;
        max = Math.max(max, i - j + 1);
    }

    return max;
};