/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    if (!nums || nums.length < 2) return nums;

    // build heap
    var idx = Math.floor(nums.length / 2 - 1); // index of first element that has child / children;
    for (var i = idx; i >= 0; i--) {
        heapify(nums, i, nums.length);
    }

    // move biggest to the end
    for (var j = nums.length - 1; j > 0; j--) {
        console.log(nums[0]);
        swap(nums, 0, j);
        heapify(nums, 0, j);
    }

    return nums[nums.length - k];
};

function heapify(arr, idx, len) {
    var max = idx,
        left = idx * 2 + 1,
        right = idx * 2 + 2;

    if (left < len && arr[left] > arr[max]) {
        max = left;
    }

    if (right < len && arr[right] > arr[max]) {
        max = right;
    }

    if (max !== idx) {
        swap(arr, max, idx);
        heapify(arr, max, len); // max is the child index, it recursively heapify children
    }
}


function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}