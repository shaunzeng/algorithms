/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs == null || strs.length == 0) return "";

    var i = 1;
    var pre = strs[0];

    while (i < strs.length) {
        while (strs[i].indexOf(pre) != 0) {
            pre = pre.substring(0, pre.length - 1);
        }
        i++;
    }

    return pre;
};