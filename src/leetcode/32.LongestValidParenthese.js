/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {

    let stack = [],
        ans = 0,
        start = -1;

    for (let i = 0; i < s.length; i++) {

        if (s[i] == '(') {
            stack.push(i);
        } else {
            if (stack.length == 0) {
                start = i;
            } else {
                stack.pop();
                if (stack.length == 0) {
                    ans = Math.max(ans, i - start);
                } else {
                    ans = Math.max(ans, i - stack[stack.length - 1]);
                }
            }
        }
    }

    return ans;
};