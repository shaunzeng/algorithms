// find common ancestor of deepest leaves 
// meaning find height

export function lcaDeepestLeaves(root) {
    if (!root) return root;
    var height = getHeight(root);
    return dfs(root, 1, height);
};


function getHeight(node) {
    if (!node) return 0;

    let left = getHeight(node.left);
    let right = getHeight(node.right);

    return left >= right ? left + 1 : right + 1;
}

function dfs(node, h, height) {
    if (!node) return null;

    if (h == height) {
        return node;
    }

    var left = dfs(node.left, h + 1, height);
    var right = dfs(node.right, h + 1, height);

    if (!left) return right;
    if (!right) return left;

    return node;
}