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