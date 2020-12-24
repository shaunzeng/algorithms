/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let arr = merge(nums1, nums2);

    return (arr.length % 2 !== 0) ? arr[(arr.length - 1) / 2] : (arr[(arr.length) / 2] + arr[(arr.length) / 2 - 1]) / 2;
};


function merge(arr1, arr2) {

    let arr = [];

    while (arr1.length !== 0 && arr2.length !== 0) {
        arr.push(arr1[0] < arr2[0] ? arr1.shift() : arr2.shift());
    }

    while (arr1.length !== 0) {
        arr.push(arr1.shift());
    }

    while (arr2.length !== 0) {
        arr.push(arr2.shift());
    }

    return arr;
}




/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
/* binary search
                 mid1
nums1 = x1 x2 x3 | x4 x5 x6
                       mid2
nums2 = y1 y2 y3 y4 y5 | y6 y7 y8

we want to find two mids that make x3 < y6 && y5 < x4, then the answer would be 
avg(max(x3,y5), min(x4,y6))

pi + p2 = (m + n +1)/2 , because if you combind two arrays, then try to find its mid index, that will be (m+n+1)/2. (+1 is to make even or odd number easy)


*/
var findMedianSortedArrays = function(nums1, nums2) {
    if (nums1.length > nums2.length) {
        // this is to make sure nums1 is always shorter than nums2
        return findMedianSortedArrays(nums2, nums1);
    }

    let m = nums1.length,
        n = nums2.length,
        halfLen = Math.trunc((m + n + 1) / 2), // get half length of both array combined
        lo = 0,
        hi = m,
        mid1 = null,
        mid2 = null;

    while (lo <= hi) {
        mid1 = lo + Math.trunc((hi - lo) / 2);
        mid2 = halfLen - mid1; // mid1 + mid2 = halfLen

        let maxLeftX = mid1 === 0 ? -Infinity : nums1[mid1 - 1],
            minRightX = mid1 === m ? Infinity : nums1[mid1],
            maxLeftY = mid2 === 0 ? -Infinity : nums2[mid2 - 1],
            minRightY = mid2 === n ? Infinity : nums2[mid2];

        if (maxLeftY <= minRightY && maxLeftY <= minRightX) {
            if ((m + n) % 2 === 0) {
                return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2
            } else {
                return Math.max(maxLeftX, maxLeftY);
            }
        } else if (maxLeftX > minRightY) { // too far on the right side for mid1, move to left
            hi = mid1 - 1;
        } else { // too far on the left side for mid1, move to right
            lo = mid1 + 1;
        }

    }

    return 0.0;

};