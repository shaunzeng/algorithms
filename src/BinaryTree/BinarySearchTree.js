import { BinaryTree, Node } from './BinaryTree';


export class BinarySearchTree extends BinaryTree {

    constructor(root) {
        super(root);
    }

    insert(data) {
        let n = new Node(data, null, null);

        // first check if root is null, if it is assign new node to root, and done;
        if (!this.root) {
            this.root = n;
            return;
        }

        let curr = this.root;

        while (true) {


            if (curr.data > data) {
                // find in left if data is less then current node data, till it finds the empty spot;
                if (curr.left) {
                    curr = curr.left;
                } else {
                    curr.left = n;
                    break;
                }
            } else {
                // find in right if data is greater then current node data, till it finds the empty spot;
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
        //3 scenairos , leaf, one child, two children
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

    getNodeCount() {
        let size = 0;

        preOrder(this.root, (n) => {
            size++;
        });

        return size;
    }

    isInTree(data) {
        let isIn = false;

        preOrder(this.root, (n) => {
            if (n.data === data) {
                isIn = true;
            }
        });

        return isIn;
    }
}

function preOrder(node, fn) {
    if (!node) return;

    fn(node);
    preOrder(node.left, fn);
    preOrder(node.right, fn);
}

function removeNode(node, data) {
    if (!node) return null;

    // 3 scenarios, 
    // 1) data equals node val (found to delete)
    // 2) data is greater than node val, and
    // 3) data is less than node val
    // always return current node;

    if (data === node.data) {
        // break scenario 1 into 4 sub scenarios : 
        // when no child, 
        // when left child only, 
        // when right child only, 
        // when two children

        if (!node.left && !node.right) {
            // where there is no children, return null as current node should be null;
            return null;
        }

        if (!node.left) {
            // when there is right child only, return right child
            return node.right;
        }

        if (!node.right) {
            // when there is left child only, return left child;
            return node.left;
        }

        if (node.left && node.right) {
            // when there are both children
            // swap current node val with the smallest in the right subtree;
            // then remove the smallest node recursively in the right subtree;
            // return current node swapped

            let tempNode = getSmallest(node.right);
            node.data = tempNode.data;
            node.right = removeNode(node.right, tempNode.data);
            return node;
        }

    } else if (data > node.data) {
        // have not found the node to delete, search in the right subtree recursively
        node.right = removeNode(node.right, data);
        return node;
    } else {
        // have not found the node to delete, search in the left subtree recursively
        node.left = removeNode(node.left, data);
        return node;
    }

}

function getSmallest(node) {
    while (true) {
        if (node.left) {
            node = node.left;
        } else {
            break;
        }
    }

    return node;
}