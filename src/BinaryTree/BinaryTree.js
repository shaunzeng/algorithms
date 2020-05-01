import { Stack } from '../Stack/Stack';
import { LCA } from './LCA';

export class Node {
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
        if (root == null) {
            return 0;
        }

        let lHeight = this.height(root.left);
        let rHeight = this.height(root.right);

        if (lHeight >= rHeight) {
            return lHeight + 1;
        } else {
            return rHeight + 1;
        }
    }

    preorder(node) {
        if (!node) return;

        console.log(node.data, ' preoder');
        this.preorder(node.left);
        this.preorder(node.right);

    }

    inorder(node) {
        if (!node) return;

        this.inorder(node.left);
        console.log(node.data, ' inorder');
        this.inorder(node.right);

    }

    postorder(node) {
        if (!node) return;

        this.postorder(node.left);
        this.postorder(node.right);
        console.log(node.data, ' postorder');
    }

    inOrder() {

        let s = new Stack();
        let curr = this.root;

        while (!!curr) {
            s.push(curr);
            curr = curr.left;
        }

        while (s.size() !== 0) {

            curr = s.pop();
            console.log(curr.data);

            if (curr.right) {
                curr = curr.right;

                while (!!curr) {
                    s.push(curr);
                    curr = curr.left;
                }
            }
        }
    }

    preOrder() {
        let s = new Stack();
        s.push(this.root);

        while (s.size() !== 0) {
            let item = s.pop();
            console.log(item.data);
            if (item.right) {
                s.push(item.right);
            }

            if (item.left) {
                s.push(item.left);
            }
        }
    }

    postOrder() {

    }
}

let bt = new BinaryTree();
bt.root = new Node(56)
bt.root.left = new Node(22);
bt.root.right = new Node(81);
bt.root.left.left = new Node(10);
bt.root.left.right = new Node(30);
bt.root.right.left = new Node(77);
bt.root.right.right = new Node(92);


console.log(LCA(bt.root, 10, 92));