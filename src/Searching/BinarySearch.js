// binary search to find index of a target value in an array of integers, the array is sorted
function binarySearch(nums, startIdx, endIdx, target) {
    if (startIdx > endIdx) return -1;

    var midIdx = Math.floor((startIdx + endIdx) / 2);

    if (target > nums[midIdx]) return binarySearch(nums, midIdx + 1, endIdx, target);
    else if (target < nums[midIdx]) return binarySearch(nums, startIdx, midIdx - 1, target);
    else return midIdx;
}