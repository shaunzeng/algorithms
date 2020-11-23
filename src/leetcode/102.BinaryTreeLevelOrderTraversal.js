/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {

    var result = [];
    dfs(root, result, 1);
    return result;

};

function dfs(node, result, depth) {
    if (node === null) return;

    if (result[depth - 1]) {
        result[depth - 1].push(node.val);

    } else {
        result[depth - 1] = [];
        result[depth - 1].push(node.val);

    }

    if (node.left) dfs(node.left, result, depth + 1);
    if (node.right) dfs(node.right, result, depth + 1);
}