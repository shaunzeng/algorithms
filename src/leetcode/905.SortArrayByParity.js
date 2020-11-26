/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    if (!A || A.length === 0) return A;

    let even = [],
        odd = [];

    for (let i = 0; i < A.length; i++) {
        if (A[i] % 2 === 0) {
            even.push(A[i]);
        } else {
            odd.push(A[i]);
        }
    };


    return [...even, ...odd]
};