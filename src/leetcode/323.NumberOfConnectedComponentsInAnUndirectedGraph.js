/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function(n, edges) {

    const parent = new Array(n).fill(-1);

    for (let i = 0; i < edges.length; i++) {
        const u = edges[i][0],
            v = edges[i][1];
        union(parent, u, v);
    }

    return parent.reduce((acct, p) => {
        if (p === -1) {
            acct++;
        }

        return acct;
    }, 0)
};


function find(parents, i) {
    if (parents[i] === -1) {
        return i;
    }

    return find(parents, parents[i]);
}


function union(parents, u, v) {
    const uParent = find(parents, u),
        vParent = find(parents, v);

    if (uParent !== vParent) {
        parents[uParent] = vParent;
    }
}