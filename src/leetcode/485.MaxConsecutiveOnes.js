/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    if (!nums || nums.length == 0) return 0;

    let i = 0,
        j = i,
        max = 0;

    while (i < nums.length) {

        const curr = nums[i];

        if (curr === 1) {
            j = i + 1;

            while (j < nums.length) {

                if (nums[j] === 1) {
                    j++;
                } else {
                    break;
                }
            };

            max = Math.max(max, j - i);
            i = j;
        } else {
            i++;
        }
    }

    return max;
};