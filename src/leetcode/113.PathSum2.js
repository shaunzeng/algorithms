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
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {

    const ans = [];

    const dfs = (node, total, path) => {
        if (!node) return;

        total += node.val;
        path.push(node.val);

        if (!node.left && !node.right && total === sum) {
            ans.push([...path]);

        }

        dfs(node.left, total, path);
        dfs(node.right, total, path);
        path.pop();
    }


    dfs(root, 0, [])
    return ans;
};