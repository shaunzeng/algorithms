/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if (!nums || nums.length === 0) return [];
    // sorted array in ascendding order
    nums.sort((a, b) => a - b);

    let i = 0,
        lo = i + 1,
        hi = nums.length - 1,
        ans = [];
    //loop through array, end is length - 2,
    // to make sure to accomendate 3 pointers
    while (i < nums.length - 2) {
        // if current value is greater than 0,
        // there is no need to go further
        // as the rest are for sure greater than 0
        // this cannt have =, for the case of [0,0,0,0]
        if (nums[i] > 0) {
            break;
        }
        // check if current value is the same
        // as previous value
        // to avoid duplicates
        if (i > 0 && nums[i] === nums[i - 1]) {
            i++;
            continue;
        }
        // set lo to next of current value
        lo = i + 1;
        // set hi to the end of array
        hi = nums.length - 1;

        while (lo < hi) {
            if (nums[i] + nums[lo] + nums[hi] > 0) {
                hi--; // if sum is greater than 0, move hi down
            } else if (nums[i] + nums[lo] + nums[hi] < 0) {
                lo++; // if sum is less than 0, move lo up
            } else {
                // if sum is 0 , we found answer
                ans.push([nums[i], nums[lo], nums[hi]]);
                // increment both pointers
                hi--;
                lo++;
                // check if lo is the same as previous value
                // to avoid deplicates
                while (lo < hi && nums[lo] === nums[lo - 1]) {
                    lo++;
                }
            }
        }
        i++
    }
    return ans;
};