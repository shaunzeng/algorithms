/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(nums, k) {
    if (!nums || nums.length == 0) return [];
    const dic = nums.reduce((acct, curr, i) => {
        acct[curr] = acct[curr] === void 0 ? 1 : acct[curr] + 1;
        return acct;
    }, {});
    return Object.keys(dic).sort((a, b) => dic[b] - dic[a]).slice(0, k);
};