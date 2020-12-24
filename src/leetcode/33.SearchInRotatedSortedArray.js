/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/* 
binary search (no duplicates)

Array can be splitted into two halves, one half is always sorted and the other half is not.
By comparing lo element and mid element, we can tell which half is sorted, then we check if 
target is in the sorted half or the unsorted half.

if target is in the sorted half, search like a regular binary search,
if not target is in the unsorted half, then move pointer to the unsorted half and keep splitting.
*/

var search = function(nums, target) {
    if (!nums || nums.length === 0) return -1;

    let lo = 0,
        hi = nums.length - 1,
        mid = null;

    while (lo <= hi) {
        mid = lo + Math.trunc((hi - lo) / 2); // get pivot

        // if mid happens to be the target element index , we simply return mid;
        if (nums[mid] === target) {
            return mid;
        }

        // now we are checking which half is sorted, and which half the target is in
        // if lo element is less or equal than the mid elements, the left half is sorted
        if (nums[lo] <= nums[mid]) {

            // if the target is in this sorted half, we move hi to mid-1;
            if (nums[lo] <= target && target < nums[mid]) {
                hi = mid - 1;
            } else { // if the target is not in this half, we move lo to mid+1. to check the other half;
                lo = mid + 1;
            }

        } else { // when mid to hi is sorted

            if (nums[mid] < target && target <= nums[hi]) {
                lo = mid + 1;
            } else {
                hi = mid - 1;
            }
        }
    }

    // if code runs here, we dont find the target;
    return -1;
};