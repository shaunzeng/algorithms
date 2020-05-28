import { Stack } from '../Stack/Stack';

export function preOrder(root) {
    if (!root) return null;

    let s = new Stack();
    s.push(root);

    while (s.size() !== 0) {
        let node = s.pop();

        console.log(node.data, ' pre order itr');

        // store the right node first into the stack, to make sure the left gets popped first
        if (node.right) {
            s.push(node.right);
        }


        // store the left node after the right node
        if (node.left) {
            s.push(node.left);
        }
    }
}



export function inOrder(root) {
    if (!root) return null;

    let s = new Stack();
    let curr = root;

    // store all the nodes on root's left edge
    while (!!curr) {
        s.push(curr);
        curr = curr.left;
    }

    while (s.size() !== 0) {

        let node = s.pop();

        console.log(node.data, ' in order itr');

        // check if there is a right node, if there is,
        // store nodes from the right and all its nodes on left edge.
        if (node.right) {
            node = node.right;

            while (!!node) {
                s.push(node);
                node = node.left;
            }
        }
    }
}



export function postOrder(root) {
    if (!root) return null;

    let s1 = new Stack();
    let s2 = new Stack();

    s1.push(root);

    while (s1.size() !== 0) {
        let node = s1.pop();
        s2.push(node);

        if (node.left) {
            s1.push(node.left);
        }

        if (node.right) {
            s1.push(node.right);
        }
    }

    while (s2.size() !== 0) {
        let node = s2.pop();
        console.log('node : ', node.val);
    }
}