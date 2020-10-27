/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    if (!nums || nums.length == 0) return [];

    ans = [];
    dic = {}

    for (let i = 0; i < nums.length; i++) {
        let copy = [...nums];
        copy.splice(i, 1);
        helper(copy, i, nums, [nums[i]]);
    }

    return ans;

};

function helper(sub, idx, nums, currArr) {
    if (sub.length == 0) {
        let key = currArr.join();

        if (dic[key] == void 0) {
            ans.push(currArr);
            dic[key] = 1;
        }

        return;
    }

    for (let i = 0; i < sub.length; i++) {
        let newArr = [...currArr];
        newArr.push(sub[i])

        let copy = [...sub];
        copy.splice(i, 1);

        helper(copy, i, nums, newArr);
    }
}

var ans = [];
var dic = {};