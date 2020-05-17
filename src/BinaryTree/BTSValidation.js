//input node
//output boolean

export function validateBST(root) {
    if (!root) return true;

    // check if subtree nodes are within the range
    // initially the range (max, min) are + - inifinity
    // as it recursively moves down into subtree, change the max and min based on current node
    return dfs(root, null, null);
}

function dfs(node, max, min) {
    if (!node) return true;

    // false if node data is out of the possible range (max, min)
    if ((max !== null && node.data >= max) || (min !== null && node.data <= min)) return false;

    let left = dfs(node.left, node.val, min);
    let right = dfs(node.right, node.val, max);

    // both subtree have to be truthy
    return left && right;
}