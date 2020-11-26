/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function(A) {
    if (!A || A.length < 3) return false;

    let start = null,
        peak = null;

    for (let i = 0; i < A.length - 1; i++) {

        if (A[i] < A[i + 1]) {
            if (start === null) {
                start = i;
            }

            if (peak !== null) {
                return false;
            }
        } else if (A[i] === A[i + 1]) {
            return false;
        } else if (A[i] > A[i + 1]) {
            if (start == null) {
                return false;
            }

            if (peak === null) {
                peak = i;
            }
        }
    }

    return start !== null && peak !== null ? true : false;

};