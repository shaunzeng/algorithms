/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if (!nums || nums.length === 0) return [];

    nums.sort((a, b) => a - b);

    const ans = [],
        n = nums.length;

    let i = 0;

    while (i < n - 2) {
        const curr = nums[i];

        if (curr > 0) {
            break; // if curr value is greater than 0, no need to continue, as the rest is all going to be greater than 0;
        }

        if (i > 0 && curr === nums[i - 1]) {
            i++;
            continue; // to void duplciates
        }


        let remain = 0 - curr,
            lo = i + 1,
            hi = n - 1;

        while (lo < hi) {

            if (nums[lo] + nums[hi] < remain) {
                lo++; // if not enough to meet remain, increment lo
            } else if (nums[lo] + nums[hi] > remain) {
                hi--; // if more than remain, reduce hi
            } else {
                ans.push([nums[i], nums[lo], nums[hi]]);
                lo++;
                hi--;

                // to avoid duplicates
                while (lo < hi && nums[lo] === nums[lo - 1]) {
                    lo++;
                }
            }
        }

        i++;
    }

    return ans;

};