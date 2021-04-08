/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    if (!root) return 0;
    ans = 1;
    dfs(root);
    return ans - 1;
};

function dfs(node) {
    if (!node) return 0;
    let l = dfs(node.left);
    let r = dfs(node.right);
    ans = Math.max(ans, l + r + 1);
    return l >= r ? l + 1 : r + 1;
}