/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (!intervals || intervals.length === 0) return intervals;
    // sort in ascending order
    intervals.sort((a, b) => a[0] - b[0]);
    //interator
    let i = 0;
    while (i < intervals.length - 1) {
        const curr = intervals[i],
            next = intervals[i + 1];
        // if curr end is greater or equal than next start,
        // update curr, and remove next
        if (curr[1] >= next[0]) {
            curr[0] = curr[0] < next[0] ? curr[0] : next[0];
            curr[1] = next[1] > curr[1] ? next[1] : curr[1];
            intervals.splice(i + 1, 1); // remove next
        } else { // if not, move on
            i++;
        }
    }
    return intervals;
};