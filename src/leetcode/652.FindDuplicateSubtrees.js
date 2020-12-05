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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
    if (!root) return root;

    const dic = {},
        ans = [];

    const dfs = (node) => {
        if (node === null) return '#';

        let l = dfs(node.left);
        let r = dfs(node.right);

        let serie = node.val + ',' + l + ',' + r;

        dic[serie] = !dic[serie] ? 1 : dic[serie] + 1;

        if (dic[serie] === 2) {
            ans.push(node)
        }

        return serie;
    }

    dfs(root);
    return ans;
};