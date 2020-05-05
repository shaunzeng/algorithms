export function LCABinarySearchTree(node, n1, n2) {

    while (node) {
        if (node.data > n1 && node.data > n2) {
            node = node.left;
        } else if (node.data < n1 && node.data < n2) {
            node = node.right;
        } else break;
    }

    return node;
}

//O(h) time complexity;