/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

    x = x.toString();

    let i = 0,
        j = x.length - 1;

    while (i < j) {
        if (x[i] == x[j]) {
            i++;
            j--;
        } else {
            return false;
        }
    }

    return true;
};