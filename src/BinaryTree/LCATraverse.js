export function findLCA(node, n1, n2) {
    if (!node) return null;

    if (node.data === n1 || node.data === n2) return node;

    let left_lca = findLCA(node.left, n1, n2);
    let right_lca = findLCA(node.right, n1, n2);

    if (left_lca == right_lca) return node;

    return left_lca ? left_lca : right_lca;
}