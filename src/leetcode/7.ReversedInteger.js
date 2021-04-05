/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let negative = false;

    if (x < 0) {
        negative = true;
        x = x * -1;
    }

    let reversed = 0;

    while (x > 0) {
        reversed = (reversed * 10) + (x % 10);
        x = parseInt(x / 10);
    }

    // Math.pow(2,32) - 1 is the 32-bit integer range
    if (reversed > Math.pow(2, 31) - 1) {
        return 0;
    }


    return negative ? reversed * -1 : reversed;
};