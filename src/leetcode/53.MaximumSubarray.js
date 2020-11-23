/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var max = Number.NEGATIVE_INFINITY;

    for (var i = 0; i < nums.length; i++) {
        var track = 0;

        for (var j = i; j < nums.length; j++) {
            track += nums[j];
            max = max > track ? max : track;
        }
    }

    return max;
};