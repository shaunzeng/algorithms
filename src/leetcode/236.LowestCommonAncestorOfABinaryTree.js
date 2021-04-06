/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    return dfs(root, p, q);
};

function dfs(node, p, q) {
    if (!node) return null;
    if (node === p || node === q) { return node; };
    const left = dfs(node.left, p, q),
        right = dfs(node.right, p, q);
    // this is to return the non null child, when one of them is the target node
    // if either is the target node, return null as well
    if (!left) return right;
    if (!right) return left;
    // if both left and right exist, return itself, as we found the lowest ancestor
    return node;
}