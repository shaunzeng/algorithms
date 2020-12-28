function ufs(n) {
    const parents = new Array(n).fill(-1);
}

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