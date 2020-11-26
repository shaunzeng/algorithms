/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    if (!nums || nums.length === 0) return null;

    let first = nums[0],
        second = -Infinity,
        third = -Infinity;

    for (let i = 1; i < nums.length; i++) {

        const curr = nums[i];

        if (curr > first) {
            third = second;
            second = first;
            first = curr;
        } else if (curr < first && curr > second) {
            third = second;
            second = curr;
        } else if (curr < second && curr > third) {
            third = curr;
        }
    }

    return third !== -Infinity ? third : first !== -Infinity ? first : second;
};