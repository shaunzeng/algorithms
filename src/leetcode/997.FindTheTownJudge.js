/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
// indegree
var findJudge = function(N, trust) {

    if (N == 1) return 1;

    const inDegree = new Array(N + 1).fill(0);

    trust.forEach(pair => {
        inDegree[pair[0]]--; // first person should be trusted by as few as possible
        inDegree[pair[1]]++;
    });

    return inDegree.findIndex(item => item === N - 1);
};