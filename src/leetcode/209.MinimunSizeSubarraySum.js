/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {

    if (!nums || nums.length === 0) return 0;

    let minLen = +Infinity;

    for (let i = 0; i < nums.length; i++) {

        let sum = nums[i];

        if (sum >= s) {
            return 1;
        }

        for (let j = i + 1; j < nums.length; j++) {
            sum = sum + nums[j];

            if (sum >= s) {
                minLen = Math.min(minLen, j - i + 1);
                break;
            }
        }
    }

    return minLen === +Infinity ? 0 : minLen;

};