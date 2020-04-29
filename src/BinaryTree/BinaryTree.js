class Node {
    left;
    right;
    data;

    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

export class BinaryTree {
    root;

    constructor(rootNode) {
        if (rootNode === null) {
            throw new Error('Root node is not defined');
        }

        this.root = rootNode
    }

    insert(data) {}

    getHeight(root) {
        if (root == null) {
            return 0;
        }

        let lHeight = this.getHeight(root.left);
        let rHeight = this.getHeight(root.right);

        if (lHeight >= rHeight) {
            return lHeight + 1;
        } else {
            return rHeight + 1;
        }
    }

    traverse(node, fn) {
        if (node === null) return;

        this.traverse(node.left);
        fn(node);
        this.traverse(node.right);
    }
}

let bt = new BinaryTree(new Node(0));

bt.root.left = new Node(1);
bt.root.right = new Node(2);
bt.root.left.left = new Node(3);
bt.root.left.left.right = new Node(3);

console.log(bt);
console.log(bt.getHeight(bt.root))