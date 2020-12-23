/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
/*
Sorted array = binary search, here we will use binary search to find x or the one that is slightly bigger
than x (index), then we ll set low to its left K element, vs set high to its right K element, then 
move the pointers toward each other, till there is k elements between low and high

As we set the pointers, we ll have to check the boundaries, as pointers cant go beyond the limit of the array

When we move pointers, when the low element is closer than the high element to X, we move high to its left by 1,
vs when hi element is closer to x than the low element, we move low to its right by 1; 

key : be very clear about index, and element, and range
*/
var findClosestElements = function(arr, k, x) {

    // if x is equal or smaller than the first element of the array, we know that the closest K will be
    // the first K elements of the array, and we just return it ;
    if (x <= arr[0]) return arr.slice(0, k);

    // when x is equal or even bigger than the last element of the array, we know that the closest K elements
    // will be the last K elements of the array, and we just return it
    if (x >= arr[arr.length - 1]) return arr.slice(arr.length - k, arr.length);


    // now use binary search to find x or the one that is slightly bigger than x
    // we use binary search template 2, where lo and hi both land on the target item
    let lo = 0,
        hi = arr.length,
        mid = null;

    while (lo < hi) {
        mid = lo + Math.trunc((hi - lo) / 2); // get pivot

        // if mid element is less than x, we move lo to mid +1
        if (arr[mid] < x) {
            lo = mid + 1;
        } else {
            // if mid element is equal or greater than x, we move hi to land on mid
            // so that we make sure when x exist in the array, hi lands on x,
            // or hi lands on the first element that is bigger than x, when x doesnt
            // exist in array
            hi = mid;
        }
    }


    // now we get the x index (hi), or the index of the element that is the first thats bigger than x;
    // the element of the index before hi will for sure be less than x;
    let index = hi;

    //reset lo and hi to spand the range, by k in both directions, make sure they dont go out of boundaries
    lo = Math.max(0, index - k), hi = Math.min(arr.length - 1, index + k);

    //Move pointers while hi - lo > k-1, so that it stops when hi - lo = k-1, so that there are k between
    // hi and lo;
    while (hi - lo > k - 1) {

        // when lo elment is closer to x than hi element, move hi down to its left;
        // when lo element is equally close to x as hi element, we still move hi down as we always 
        // choose the lo element over hi (required by the question);
        if (x - arr[lo] <= arr[hi] - x) {
            hi--;
        } else { // when hi element is closer to x, we bring lo up by one;
            lo++;
        }
    }


    // now we get the range of k elements that are closest to x, we just have to return 
    //the sub array of that range

    return arr.slice(lo, hi + 1);

};