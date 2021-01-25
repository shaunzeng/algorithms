/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseWords = function(s) {
    if (!s || s.length === 0) return [];

    s.reverse();

    let i = 0,
        j = 0;

    while (i < s.length) {

        j = i;

        while (j < s.length && s[j] !== ' ') {
            j++;
        }

        reverse(i, j - 1, s);

        i = j + 1;
    }

};

function reverse(start, end, s) {
    while (start < end) {
        const tmp = s[start];
        s[start] = s[end];
        s[end] = tmp;

        start++;
        end--;
    }
}