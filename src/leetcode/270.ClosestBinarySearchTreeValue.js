/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number}
 */
var closestValue = function(root, target) {
    if (!root) return -1;

    const arr = [];

    dfs(root, arr);
    console.log(arr);
    let lo = 0,
        hi = arr.length - 1,
        mid = null,
        num = null;

    while (lo + 1 < hi) {
        mid = lo + Math.trunc((hi - lo) / 2);
        num = arr[mid];

        if (num < target) {
            lo = mid;
        } else if (num > target) {
            hi = mid;
        } else {
            return num;
        }
    }

    return Math.abs(arr[lo] - target) < Math.abs(arr[hi] - target) ? arr[lo] : arr[hi];
};


function dfs(node, arr) {
    if (!node) return;
    dfs(node.left, arr);
    arr.push(node.val)
    dfs(node.right, arr);
}


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number}
 */
var closestValue = function(root, target) {
    let val, closest = root.val;

    while (root) {
        val = root.val;
        closest = Math.abs(val - target) < Math.abs(closest - target) ? val : closest;
        root = target < root.val ? root.left : root.right;
    }

    return closest;
};