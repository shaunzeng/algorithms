/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numWays = function(n, k) {

    if (n === 1) return k; // if there s only one post, only k ways
    if (n === 2) {
        // if there s only 2 posts, k (first one has k ways) + k(first post) * (k-1) (second post) is the toatl ways;
        return k + k * (k - 1);
    }

    // in the main logic, we only consider at least 3 posts, from 1 to n
    const same = new Array(n + 1).fill(0), // dp that tracks when i is the same as i-1
        diff = new Array(n + 1).fill(0); // dp that trakcs when i is different from i -1;

    // initial state, when 2 posts 
    same[2] = k; // k ways when second post is the same as first
    diff[2] = k * (k - 1); // k * (k-1) ways when first and second are different;


    for (let i = 3; i <= n; i++) {
        same[i] = diff[i - 1]; // when i is the same as i-1, copy over i-1 ;
        diff[i] = same[i - 1] * (k - 1) + diff[i - 1] * (k - 1); // when i is different from i-1, i-1 can be either the same or different from i-2, so the ways are the total of those two scenarios
    };

    return same[n] + diff[n]; // return the total of both scenarios;
};