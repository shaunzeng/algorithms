/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    if (!nums || nums.length == 0) return [];

    let dic = {},
        ans = [];

    for (let i = 0; i < nums.length; i++) {
        let curr = nums[i],
            remain = target - curr;

        if (dic[remain] !== void 0) {
            ans = [dic[remain], i];
            break;
        } else {
            dic[curr] = i;
        }

    }

    return ans;
};