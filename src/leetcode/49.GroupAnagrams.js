/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {


    const dic = strs.reduce((d, item, i) => {
        const str = item.split('').sort().join('');

        if (!d[str]) {
            d[str] = [];
        }

        d[str].push(i);

        return d;
    }, {});

    return Object.values(dic).map(segment => segment.map(s => strs[s]));
};