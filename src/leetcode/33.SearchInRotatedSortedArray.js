/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/* binary search
1. rotated array can be splited into 2 parts in the middle, 
   one part is always a sorted array, 
   vs the other part is a rotated array
   
2. check if target is in the sorted part or non sorted part

3. if target is in sorted part, serch like a regular binary search, like move the mid by 1, depend on which part(let or right);

4. if target is in non sorted part, keep splitting by half
*/

var search = function(nums, target) {
    if (!nums || nums.length === 0) return -1;
    return helper(nums, target);
};


function helper(nums, target) {

    let lo = 0,
        hi = nums.length - 1;

    while (lo <= hi) {
        let mid = lo + Math.floor((hi - lo) / 2);

        if (nums[mid] === target) {
            return mid;
        }

        if (nums[lo] <= nums[mid]) {
            if (target < nums[mid] && target >= nums[lo]) {
                hi = mid - 1;
            } else {
                lo = mid + 1;
            }
        } else {
            if (target <= nums[hi] && target > nums[mid]) {
                lo = mid + 1;
            } else {
                hi = mid - 1;
            }
        }
    }

    return -1;
}