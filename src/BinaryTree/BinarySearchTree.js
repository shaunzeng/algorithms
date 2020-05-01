import { BinaryTree, Node } from './BinaryTree';


export class BinarySearchTree extends BinaryTree {

    constructor(root) {
        super(root);
    }

    insert(data) {
        let n = new Node(data, null, null);

        if (!this.root) {
            this.root = n;
            return;
        }

        let curr = this.root;

        while (true) {

            if (curr.data > data) {
                if (curr.left) {
                    curr = curr.left;
                } else {
                    curr.left = n;
                    break;
                }
            } else {
                if (curr.right) {
                    curr = curr.right;
                } else {
                    curr.right = n;
                    break;
                }
            }
        }
    }

    access(node, data) {
        if (!node) return null;

        if (data === node.data) return node;

        if (data > node.data) {
            return this.access(node.right, data);
        } else {
            return this.access(node.right, data);
        }
    }

    remove(data) {
        this.root = removeNode(this.root, data);
    }

    findPath(data) {
        let path = [];
        let isFound = false;

        preOrder(this.root, (n) => {
            if (!isFound) {
                path.push(n);
            }

            if (data == n.data) {
                isFound = true;
            }
        });

        return path;
    }

    getMin() {
        let curr = this.root;
        while (!!curr.left) {
            curr = curr.left;
        }
        return curr.data;
    }

    getMax() {
        let curr = this.root;
        while (!!curr.right) {
            curr = curr.right;
        }
        return curr.data;
    }
}

function preOrder(node, fn) {
    if (!node) return;

    fn(node);
    preOrder(node.left, fn);
    preOrder(node.right, fn);
}

function removeNode(node, data) {
    if (node == null) {
        return null;
    }

    if (data == node.data) {
        // has no children
        if (node.left == null && node.right == null) {
            return null;
        }

        // has no left child
        if (node.left == null) {
            return node.right;
        }

        // has no right child
        if (node.right == null) {
            return node.left;
        }

        // has two children
        var tempNode = getSmallest(node.right);
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
    } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
    } else {
        node.right = removeNode(node.right, data);
        return node;
    }
}