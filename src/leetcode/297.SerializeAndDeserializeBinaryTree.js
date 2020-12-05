/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root, arr = []) {

    arr.push(root ? root.val : 'x');

    if (root) {
        serialize(root.left, arr);
        serialize(root.right, arr);
    }

    return arr;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {

    let d = data.shift();

    if (d === 'x') {
        return null;
    } else {
        let node = new TreeNode(d);
        node.left = deserialize(data);
        node.right = deserialize(data);
        return node;
    }
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */