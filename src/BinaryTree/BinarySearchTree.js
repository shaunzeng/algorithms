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

    delete(data) {

    }

}

let bst = new BinarySearchTree(new Node(23, null, null));