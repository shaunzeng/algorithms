export function constructBinaryTree(preorder, inorder) {
    if (preorder.length == 0 || inorder.length == 0 || inorder.length !== preorder.length) return null;
    return dfs(preorder, inorder, 0, inorder.length - 1, 0);
};

function dfs(preorder, inorder, in_start, in_end, pre_start) {

    if (in_start > in_end || pre_start >= preorder.length) return null;

    var node = new TreeNode(preorder[pre_start], null, null);

    var idx = inorder.indexOf(preorder[pre_start]);
    var leftSubTreeLen = idx - in_start;
    node.left = dfs(preorder, inorder, in_start, idx - 1, pre_start + 1);
    node.right = dfs(preorder, inorder, idx + 1, in_end, pre_start + leftSubTreeLen + 1);

    return node;

}

// preorder first one is always the parent, find the parent index in
// inorder array, and split the array into left and right, left array
// is the left subtree, right array is right subtree, do it recursively