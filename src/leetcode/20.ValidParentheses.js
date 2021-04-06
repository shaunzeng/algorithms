/**
 * @param {string} s
 * @return {boolean}
 */
var isValidParenthese = function(s) {
    if (!s || s.length === 0) return true;
    let stack = [],
        i = 0;
    while (i < s.length) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            stack.push(s[i]);
        } else if (s[i] === ')') {
            if (stack[stack.length - 1] !== '(') return false;
            stack.pop();
        } else if (s[i] === ']') {
            if (stack[stack.length - 1] !== '[') return false;
            stack.pop();
        } else if (s[i] === '}') {
            if (stack[stack.length - 1] !== '{') return false;
            stack.pop();
        }
        i++;
    }
    return stack.length === 0 ? true : false;
};