/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    if (!s) return 0;

    let sign = 1,
        hasNumStarted = false,
        result = '0',
        i = 0;

    for (let i = 0; i < s.length; i++) {

        if (!hasNumStarted) {
            if (s[i] === ' ') {
                continue;
            } else if (s[i] === '+') {
                sign = 1;
                hasNumStarted = true;
                continue;
            } else if (s[i] === '-') {
                sign = -1;
                hasNumStarted = true;
                continue;
            } else if (parseInt(s[i]) >= 0) {
                result += s[i];
                hasNumStarted = true;
                continue;
            } else {
                return 0;
            }
        } else {
            if (parseInt(s[i]) >= 0) {
                result += s[i];
            } else {
                break;
            }
        }
    }

    result = parseInt(result);

    if (sign < 0 && result > Math.pow(2, 31)) {
        return -Math.pow(2, 31);
    }
    if (sign > 0 && result > Math.pow(2, 31) - 1) {
        return Math.pow(2, 31) - 1;
    }

    return sign < 0 ? result * -1 : result;
};