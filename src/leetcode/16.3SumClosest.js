/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    if (!nums || nums.length === 0) return 0;
    nums.sort((a, b) => a - b); // sort nums
    let ans = nums[0] + nums[1] + nums[nums.length - 1]; // initial ans , 2 smallest + 1 biggest
    for (let i = 0; i < nums.length - 2; i++) {
        let a_pointer = i + 1,
            b_pointer = nums.length - 1;
        while (a_pointer < b_pointer) {
            // get current sum by adding 2 smallest + 1 largest value
            let curr_sum = nums[i] + nums[a_pointer] + nums[b_pointer];
            // check absolute value and see if answer needs to be updated
            ans = Math.abs(curr_sum - target) < Math.abs(ans - target) ? curr_sum : ans;
            // if current sum is greater than target, move the pointer of large value down
            if (curr_sum > target) {
                b_pointer -= 1;
            } else {
                // if current sum is less than target, move the pointer of the smaller value up;
                a_pointer += 1;
            }
        }
    }
    return ans;
};