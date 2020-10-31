/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    var dic = {};
    var result = [];

    for (var i = 0; i < strs.length; i++) {
        var str = strs[i].split('').sort().join('');

        if (dic[str] === void 0) {
            dic[str] = [];
        }

        dic[str].push(i);
    }

    for (var p in dic) {
        if (dic.hasOwnProperty(p)) {
            var arr = dic[p],
                toPush = [];

            for (var i = 0; i < arr.length; i++) {
                toPush.push(strs[arr[i]]);
            }

            result.push(toPush);
        }
    }

    return result;
};