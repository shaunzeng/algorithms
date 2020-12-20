/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {

    let lo = 1,
        hi = n;

    while (lo <= hi) {

        let mid = lo + Math.floor((hi - lo) / 2);

        let ans = guess(mid);

        if (ans === 0) {
            return mid;
        } else if (ans === -1) {
            hi = mid - 1;
        } else {
            lo = mid + 1;
        }
    }

    return -1;
};