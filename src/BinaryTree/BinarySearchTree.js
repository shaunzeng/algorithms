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
        let parent;

        while (true) {
            parent = curr;
            if (data <= curr.data) {
                curr = curr.left;

                if (!curr) {
                    parent.left = n;
                    break;
                }
            } else {
                curr = curr.right;

                if (!curr) {
                    parent.right = n;
                    break;
                }
            }
        }
    }

    delete(data) {

    }

}

let bst = new BinarySearchTree(new Node(23, null, null));