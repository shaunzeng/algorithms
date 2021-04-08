var maxPathSum = function(root) {
    if (!root) return 0;
    var ans = Number.NEGATIVE_INFINITY;

    const dfs = (node) => {
        if (!node) return 0;

        var left = Math.max(0, dfs(node.left, ans));
        var right = Math.max(0, dfs(node.right, ans));

        let sum = left + right + node.val;

        ans = Math.max(ans, sum);

        return Math.max(left, right) + node.val
    }


    dfs(root);
    return ans;
};