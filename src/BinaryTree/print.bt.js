var printTree = function(root) {
    if (!root) return;


    var m = [];
    var h = height(root);

    // total num of nodes of a height is 2^h-1;
    dfs(root, m, 0, 0, Math.pow(2, h) - 1 - 1, Math.pow(2, h) - 1);
    return m;
};

// keep track of start and end, to place current node in the middle of start and end
function dfs(node, m, level, start, end, count) {
    if (!node) return;

    if (!m[level]) {
        m[level] = new Array(count);
    }

    var mid = Math.floor((end + start) / 2);
    m[level][mid] = node.val + '';
    for (var i = 0; i < count; i++) {
        if (m[level][i] == void 0) {
            m[level][i] = '';
        }
    }

    dfs(node.left, m, level + 1, start, mid - 1, count);
    dfs(node.right, m, level + 1, mid + 1, end, count);
}

function height(node) {
    if (!node) return 0;

    var left = height(node.left);
    var right = height(node.right);

    return left >= right ? left + 1 : right + 1;
}