/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var brackets = '(){}[]<>';
    var stack = [];

    for (var i = 0; i < s.length; i++) {
        var position = brackets.indexOf(s[i]);

        if (position % 2 === 0) {
            stack.push(s[i]);
        } else {
            var el = stack.pop();
            if (brackets[position - 1] != el) {
                return false;
            }
        }
    }

    return !stack.length;
};