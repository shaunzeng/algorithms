/**
 * @param {TreeNode} root
 * @return number
 */

export function height(root) {
    if (!root) return 0;

    let leftHeight = height(root.left);
    let rightHeight = height(root.right);

    return leftHeight >= rightHeight ? leftHeight + 1 : rightHeight + 1;
}