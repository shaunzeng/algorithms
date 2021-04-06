/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    return Object.values(strs.reduce(formMapping, {}))
        .map(segment => segment.map(s => strs[s]));
};

function formMapping(obj, item, i) {
    const str = item.split('').sort().join('');
    obj[str] = obj[str] || [];
    obj[str].push(i);
    return obj;
}