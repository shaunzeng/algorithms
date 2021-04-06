//124. Binary Tree Maximum Path Sum

//Given a non-empty binary tree, find the maximum path sum.

//For this problem, a path is defined as any sequence of nodes from some starting node to any node
// in the tree along the parent-child connections. The path must contain at least one node and 
//does not need to go through the root.
var maxPathSum = function(root) {
    if (!root) return 0;
    var ans = Number.NEGATIVE_INFINITY;
    const dfs = (node) => {
        if (!node) return 0;
        var left = Math.max(0, dfs(node.left));
        var right = Math.max(0, dfs(node.right));
        let sum = left + right + node.val;
        ans = Math.max(ans, sum);
        return Math.max(left, right) + node.val
    }
    dfs(root);
    return ans;
};