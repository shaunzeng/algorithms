/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    if (n === 0) return [];

    let ans = [];
    helper('', 0, 0, ans, n);
    return ans;
};


function helper(s, left, right, ans, n) {
    if (s.length == n * 2) {
        ans.push(s);
        return;
    }


    if (left < n) {
        helper(s + '(', left + 1, right, ans, n);
    }

    if (left > right) {
        helper(s + ')', left, right + 1, ans, n);
    }
}