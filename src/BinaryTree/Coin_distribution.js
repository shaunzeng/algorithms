var distributeCoins = function(root) {
    if (!root) return;

    moves = 0;
    dfs(root);

    return moves;
};

var moves = 0;

function dfs(node) {
    if (!node) return 0;

    let left = dfs(node.left);
    let right = dfs(node.right);

    moves = moves + Math.abs(left) + Math.abs(right);

    return node.val + left + right - 1;
}