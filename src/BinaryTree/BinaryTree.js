export class TreeNode {
    left;
    right;
    data;

    constructor(data, left, right) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

export class BinaryTree {
    root;

    constructor(rootNode) {
        this.root = rootNode
    }


    height(root) {
        if (root == null) return 0;

        let lHeight = this.height(root.left);
        let rHeight = this.height(root.right);

        return (lHeight >= rHeight ? lHeight : rHeight) + 1;
    }
}