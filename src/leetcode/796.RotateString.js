/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function(A, B) {
    if (!A && !B) return true;


    for (let i = 0; i < A.length; i++) {
        if (A[i] == B[B.length - 1]) {
            let newStr = A.substring(i + 1, A.length) + A.substring(0, i + 1);

            if (newStr == B) {
                return true;
            }
        }
    }

    return false;
};