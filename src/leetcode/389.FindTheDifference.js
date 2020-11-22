/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    t = t.split('').sort().join('');
    s = s.split('').sort().join('');

    var i = 0;

    while (t[i] == s[i] && i < t.length) {
        i++;
    }

    return t[i];
};