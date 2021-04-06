/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var sum = 0,
        len = nums.length;
    for (var i = 0; i < len + 1; i++) {
        sum = sum + i;
    }
    for (var j = 0; j < len; j++) {
        sum = sum - nums[j];
    }
    return sum
};