/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function(M) {

    const ufs = uf(M); // build union find set / parents array

    return ufs.reduce((cnt, p) => {
        // check -1 , because if a node has -1 as parent, that means 
        // it does not belong to any group
        // so we count 1;
        if (p === -1) {
            cnt++;
        }

        return cnt;
    }, 0);
};



function uf(M) {
    // init a parent array with -1 as default 
    const parents = new Array(M.length).fill(-1);

    // loop thru all class, not including yourself 
    for (let i = 0; i < M.length - 1; i++) {
        for (let j = i + 1; j < M.length; j++) {
            if (M[i][j] === 1) {
                union(parents, i, j) // if two are friend, union them
            }
        }
    }

    // return the parent array
    return parents;
}

function find(parents, i) {
    if (parents[i] === -1) {
        return i;
    }
    return find(parents, parents[i]);
}

function union(parents, u, v) {
    const uP = find(parents, u),
        vP = find(parents, v);

    if (uP !== vP) { // we only union when their parents are not the same
        parents[uP] = vP;
    }
}