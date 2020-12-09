/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
    if (!A || A.length === 0) return A;

    let m = A.length,
        n = A[0].length,
        ans = Array.from(new Array(n), () => new Array(m))

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            ans[j][i] = A[i][j]
        }
    }

    return ans;
};