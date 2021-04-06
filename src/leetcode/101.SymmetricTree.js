var isSymmetric = function(root) {
    return root === null || isSymmetric(root.left, root.right);
};

function isSymmetric(left, right) {
    if (left === null || right === null) return left === right;
    if (left.val !== right.val) return false;
    return isSymmetric(left.left, right.right) && isSymmetric(left.right, right.left);
}