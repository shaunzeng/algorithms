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
}