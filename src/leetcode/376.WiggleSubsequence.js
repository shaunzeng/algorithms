/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
    // validate input
    if (!nums || nums.length == 0) return 0;

    //define 2 dps of 2 scenarios: 
    //dpUp[i] = longest subsequence from 0 to i that goes up at i,
    //dpDown[i] = longest subsequence from 0 to i that goes down at i;
    let dpUp = new Array(nums.length).fill(0),
        dpDown = new Array(nums.length).fill(0);

    // initial values: 1, as first item can be seens as both going up and going down
    dpUp[0] = 1;
    dpDown[0] = 1;

    for (let i = 1; i < nums.length; i++) {

        if (nums[i - 1] < nums[i]) {
            // when previous is less than current , it means going up, 
            // we update dpUp[i] by getting previous max length of going down and plus 1;
            // for dpDown[i], it stays the same max length as dpDown[i-1], no change in max length
            dpUp[i] = dpDown[i - 1] + 1;
            dpDown[i] = dpDown[i - 1];
        } else if (nums[i - 1] > nums[i]) {
            // when previous is greater than current , it means going down, 
            // we update dpDown[i] by getting previous max length of going up and plus 1;
            // for dpUp[i], it stays the same max length as dpUp[i-1], no change in max length
            dpDown[i] = dpUp[i - 1] + 1;
            dpUp[i] = dpUp[i - 1];
        } else {
            //when previous equals to current, no chang on both scenarios
            dpDown[i] = dpDown[i - 1];
            dpUp[i] = dpUp[i - 1];
        }
    }

    //compare and return the max between the two scenarios
    return Math.max(dpUp[nums.length - 1], dpDown[nums.length - 1]);
};