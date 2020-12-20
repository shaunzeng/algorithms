/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {

        let lo = 1,
            hi = n + 1;

        while (lo < hi) {
            let mid = lo + Math.trunc((hi - lo) / 2),
                isBad = isBadVersion(mid);

            if (isBad) {
                hi = mid;
            } else {
                lo = mid + 1;
            }

        }

        if (lo === hi && lo !== n + 1) return lo;
        return -1;
    };


};