/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
    return kSumCount([A, B, C, D]);
};

function kSumCount(lists) {
    const m = {};
    addToHash(lists, m, 0, 0);
    return countComplements(lists, m, lists.length / 2, 0);
}

function addToHash(lists, m, i, sum) {
    if (i === lists.length / 2) {
        m[sum] = m[sum] ? m[sum] + 1 : 1;
    } else {
        lists[i].forEach(item => {
            addToHash(lists, m, i + 1, sum + item);
        });
    }
}

function countComplements(lists, m, i, complement) {
    if (i === lists.length) {
        return m[complement] || 0;
    }

    let cnt = 0;
    lists[i].forEach(item => {
        cnt += countComplements(lists, m, i + 1, complement - item);
    });
    return cnt;
}