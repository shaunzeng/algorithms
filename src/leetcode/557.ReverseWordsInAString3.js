/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    if (!s) return s;

    let i = 0,
        j = 0;

    while (i < s.length) {

        if (s[i] === ' ') {
            i++;
        } else {

            j = i + 1;

            while (j < s.length) {

                if (s[j] !== ' ') {
                    j++;
                } else {
                    break;
                }
            };

            s = reverseSubStr(i, j, s);
            i = j;
        }
    }

    return s;

};


function reverseSubStr(i, j, s) {
    const sub = s.substring(i, j).split("").reverse().join('');
    const str = s.substring(j, s.length);
    const origin = s.substring(0, i);
    return origin + sub + str;
}