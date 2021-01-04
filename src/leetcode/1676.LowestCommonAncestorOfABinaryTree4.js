/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode[]} nodes
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, nodes) {

    let lca = nodes[0];

    for (let i = 1; i < nodes.length; i++) {
        lca = findLCA(root, lca, nodes[i]);
    }

    return lca;
};

function findLCA(node, n1, n2) {
    if (!node) return null;

    if (node === n1 || node === n2) {
        return node;
    };

    let l = findLCA(node.left, n1, n2),
        r = findLCA(node.right, n1, n2);

    if (!l) return r;
    if (!r) return l;

    return node;
}