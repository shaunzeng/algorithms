var isValidBST = function(root) {
    if (!root) return true;
    return dfs(root, null, null)
};


function dfs(node, min, max) {
    if (!node) return true;
    if ((min !== null && node.val <= min) || (max !== null && node.val >= max)) return false;
    return dfs(node.left, node.val, min) && dfs(node.right, max, node.val);
}