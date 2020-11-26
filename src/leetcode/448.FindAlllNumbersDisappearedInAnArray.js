/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    if (!nums || nums.length === 0) return [];

    let len = nums.length,
        dic = {};

    nums.forEach((n, i) => {
        dic[i + 1] = true;
    });

    nums.forEach(n => {
        if (dic[n]) {
            delete dic[n];
        };
    });

    return Object.keys(dic);


};