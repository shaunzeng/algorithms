export function LCABinarySearchTree(node, n1, n2) {

    while (node) {
        if (node.data > n1 && node.data > n2) {
            node = node.left;
        } else if (node.data < n1 && node.data < n2) {
            node = node.right;
        } else {
            return node;
        }
    }
}

//O(h) time complexity;
export function lowestCommonAncestor(root, p, q) {
    if (root.val > p.val && root.val > q.val) {
        return lowestCommonAncestor(root.left, p, q);
    } else if (root.val < p.val && root.val < q.val) {
        return lowestCommonAncestor(root.right, p, q);
    }

    return root;
};