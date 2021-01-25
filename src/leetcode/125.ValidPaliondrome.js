/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if (!s || s.length === 0) return true;
    s = s.toLowerCase();
    let i = 0,
        j = s.length - 1;

    while (i <= j) {

        while (i < j && !isLetterOrNum(s[i])) {
            i++;
        }

        while (i < j && !isLetterOrNum(s[j])) {
            j--;
        }

        if (s[i] !== s[j]) {
            return false;
        }

        i++;
        j--;
    }

    return true;
};

function isLetterOrNum(input) {
    return input.length === 1 && ((/[a-zA-Z]/).test(input) || (/^\d+$/).test(input))
}