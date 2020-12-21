/**
 * // This is the ArrayReader's API interface.
 * // You should not implement it, or speculate about its implementation
 * function ArrayReader() {
 *
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 * };
 */

/**
 * @param {ArrayReader} reader
 * @param {number} target
 * @return {number}
 */

// binary search
var search = function(reader, target) {

    if (reader.get(0) === target) return 0;

    // set lo to 0, hi to 1;
    let lo = 0,
        hi = 1;
    while (reader.get(hi) < target) {
        lo = hi;
        hi = hi * 2; // keep moving both to right till the right value is greater than the target, then we found the boundaries.
    }

    // a binary search
    let mid = 0,
        curr = null;

    while (lo <= hi) {
        mid = lo + Math.trunc((hi - lo) / 2);
        curr = reader.get(mid);

        if (curr === target) {
            return mid;
        } else if (curr > target) {
            hi = mid - 1;
        } else {
            lo = mid + 1;
        }
    }

    return -1;

};