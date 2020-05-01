export function lowestCommonAncestor(tree, n1, n2) {
    let path1 = [];
    let path2 = [];

    findPath(tree, n1, path1);
    findPath(tree, n2, path2);
    return findCommonAncestor(path1, path2);
}

function findPath(node, data, path) {
    if (!node) return false;

    path.push(node);

    if (node.data === data) return true;
    if (node.left && findPath(node.left, data, path)) return true;
    if (node.right && findPath(node.right, data, path)) return true;

    path.pop();
    return false;
}


function findCommonAncestor(path1, path2) {
    let ancestor;

    for (let i = 0; i < path1.length; i++) {
        for (let j = i; j < path2.length; j++) {
            if (path1[i] == path2[j]) {
                ancestor = path2[j];
            }
        }
    }

    return ancestor;
}