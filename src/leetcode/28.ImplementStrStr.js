/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (!needle) return 0;
    let i = 0,
        len = haystack.length - needle.length + 1;
    while (i < len) {
        const curr = haystack[i];
        if (curr == needle[0]) {
            if (compare(i, haystack, needle)) {
                return i;
            } else { i++; }
        } else {
            i++;
        }
    }
    return -1;
};

function compare(i, str, needle) {
    for (let j = 0; j < needle.length; j++) {
        if (needle[j] !== str[i + j]) {
            return false;
        }
    }
    return true;
}