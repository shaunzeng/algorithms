/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    
    if (!nums || nums.length == 0) return 0;
    
    let ans = 0, dic = {};
    
    for (let i = 0 ; i < nums.length; i++) {
        dic[nums[i]] = dic[nums[i]] == void 0 ? 1: dic[nums[i]]+1;
    }

    for (let p in dic) {
        p = parseInt(p);
        if (dic[p+1] !== void 0) {
            ans = Math.max(ans, dic[p]+dic[p+1]);
        }
    }
    
    return ans;
    
};