/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//backtracking
var subsets = function(nums) {
    if (!nums || nums.length == 0) return [];

    let ans = [],
        len = nums.length;
    for (let k = 0; k <= len; k++) {
        helper(0, k, [], nums, ans);
    }
    return ans;
};


function helper(idx, len, curr, nums, ans) {
    if (curr.length == len) {
        ans.push([...curr]);
        return;
    }

    for (let i = idx; i < nums.length; i++) {
        curr.push(nums[i]);
        helper(i + 1, len, curr, nums, ans);
        curr.pop();
    }
}