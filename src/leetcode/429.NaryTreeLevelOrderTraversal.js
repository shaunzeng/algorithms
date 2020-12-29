/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return [];

    let dic = {};

    dfs(root, dic, 0);

    return Object.keys(dic).map((key) => dic[key]);
};

function dfs(node, dic, depth) {
    if (!node) return;

    if (!dic[depth]) {
        dic[depth] = [];
    }

    dic[depth].push(node.val);

    for (let i = 0; i < node.children.length; i++) {
        dfs(node.children[i], dic, depth + 1);
    }
}