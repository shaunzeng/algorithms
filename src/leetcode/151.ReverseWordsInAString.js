/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    if (!s) return s;

    let ans = '';

    let i = 0,
        j = 0;

    while (i < s.length) {

        if (s[i] === ' ') {
            i++;
        } else if (s[i] !== ' ') {
            j = i;

            while (j < s.length) {

                if (s[j] !== ' ') {
                    j++;
                } else {
                    break;
                }
            };

            ans = ' ' + s.substring(i, j) + ans;

            i = j;
        }
    }

    return ans.trim();
};