/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    if (!candidates || candidates.length == 0) return [];

    ans = [];
    dic = {};
    helper(candidates, 0, target, []);
    return ans;

};

function helper(nums, sum, target, currArr) {

    if (sum == target) {

        let key = currArr.sort((a, b) => a - b).join();

        if (dic[key] == void 0) {
            ans.push(currArr);
            dic[key] = 1;
        }

        return;
    }

    if (sum > target) {
        return;
    }

    for (let i = 0; i < nums.length; i++) {
        let currNum = nums[i],
            remain = target - currNum,
            newSum = sum + currNum;

        let newArr = [...currArr];
        newArr.push(currNum);

        if (remain >= 0) {
            helper(nums, newSum, target, newArr);
        }
    }
}

var ans = [];
var dic = {};