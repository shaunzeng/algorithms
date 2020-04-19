'use strict'

// js implementation of a linked list


// js implementation of Hash Table


// binary search tree
function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
    this.count = 1;

    function show() {
        return this.data;
    }
}

function BST() {
    this.root = null;
    this.insert = insert;
    this.inOrder = inOrder;
    this.preOrder = preOrder;
    this.postOrder = postOrder;
    this.getMin = getMin;
    this.getMax = getMax;
    this.remove = remove;
    this.findPath = findPath;


    function insert(data) {
        var n = new Node(data, null, null);

        if (this.root == null) {
            this.root = n;
        } else {
            var curr = this.root;
            var parent;
            while (true) {
                parent = curr;
                if (data < curr.data) {
                    curr = curr.left;
                    if (curr == null) {
                        parent.left = n;
                        break;
                    }
                } else {
                    curr = curr.right;
                    if (curr == null) {
                        parent.right = n;
                        break;
                    }
                }
            }
        }
    }

    function inOrder(node, cb) {
        if (!(node == null)) {
            inOrder(node.left, cb);
            cb(node.data);
            inOrder(node.right, cb);
        }
    }

    function preOrder(node, cb) {
        if (!(node == null)) {
            cb(node.data);
            preOrder(node.left, cb);
            preOrder(node.right, cb);
        }
    }

    function postOrder(node, cb) {
        if (!(node == null)) {
            postOrder(node.left, cb);
            postOrder(node.right, cb);
            cb(node.data);
        }
    }

    function getMin() {
        var curr = this.root;
        while (!(curr.left == null)) {
            curr = curr.left;
        }
        return curr.data;
    }

    function getMax() {
        var curr = this.root;
        while (!(curr.right == null)) {
            curr = curr.right;
        }
        return curr.data;
    }

    function find(data) {
        var curr = this.root;
        while (curr.data != data) {
            if (data < curr.data) {
                curr = curr.left;
            } else {
                curr = curr.right;
            }

            if (curr == null) {
                return null;
            }
        }
        return curr;
    }

    function remove(data) {
        root = removeNode(this.root, data);
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


    function findPath(n) {
        var root = this.root;
        var path = [];
        var isFound = false;
        this.preOrder(root, function(data) {
            if (data == n) {
                isFound = true;
            }

            if (isFound) {
                path.push(data);
            }
        });

        return path;
    }
}


function traverse(node, cb) {
    if (!(node == null)) {
        cb(node.data);
        traverse(node.left, cb);
        traverse(node.right, cb);
    }
}

function findPath(root, num) {
    var path = [];
    var isFound = false;
    var target = num;

    traverse(root, function(n) {
        if (!isFound) {
            path.push(n);
        }

        if (n === target) {
            isFound = true;
        }
    });

    return path;
}
var findLCA = function(node, n1, n2) {
    if (node === null)
        return null;
    else if (node === n1 || node === n2)
        return node;
    var left = findLCA(node.left, n1, n2);
    var right = findLCA(node.right, n1, n2);
    if (left !== null && right !== null)
        return node;
    return (left !== null ? left : right);
}






// implement a stack that supports push, pop, top, and retrive the minimun element in constant time : leetcode 155
// solution: have an another stack that keeps track on the minimun, 
function MinStack() {
    var stack = [];
    var minStack = [];

    this.push = push;
    this.pop = pop;
    this.top = top;
    this.getMin = getMin;


    function push(el) {
        var arr = stack.unshift(el);
        checkMinPush(el);
        return arr;
    }

    function pop() {
        var el = stack.shift();
        checkMinPop(el);
        return el;
    }

    function top() {
        return stack[0];
    }

    function getMin() {
        return minStack[0];
    }

    function checkMinPush(el) {
        if (minStack.length === 0) {
            minStack.push(el);
        } else if (el < minStack[0]) {
            minStack.unshift(el);
        }
    }

    function checkMinPop(el) {
        if (el <= minStack[0]) {
            minStack.shift();
        }
    }
}

export class MinIntHeap {

    constructor(items) {
        this.items = items || [];

        if (this.items.length >= 2) {
            let len = this.items.length - 1;

            for (let i = len; i >= 0; i--) {
                this.minHeapify(i);
            }
        }
    }

    getLeftChildIndex(parentIndex) {
        return parentIndex * 2 + 1;
    }

    getRightChildIndex(parentIndex) {
        return parentIndex * 2 + 2;
    }

    getParentIndex(ChildIndex) {
        return ChildIndex / 2 >> 0;
    }

    leftChild(parentIndex) {
        return this.items[this.getLeftChildIndex(parentIndex)];
    }

    rightChild(parentIndex) {
        return this.items[this.getRightChildIndex(parentIndex)];
    }

    parent(childIndex) {
        return this.items[this.getParentIndex(childIndex)];
    }

    hasLeftChild(parentIndex) {
        return this.getLeftChildIndex(parentIndex) < this.items.length;
    }

    hasRightChild(parentIndex) {
        return this.getRightChildIndex(parentIndex) < this.items.length;
    }

    hasParent(childIndex) {
        return childIndex / 2 > 0;
    }

    swap(idxOne, idxTwo) {
        let temp = this.items[idxOne];
        this.items[idxOne] = this.items[idxTwo];
        this.items[idxTwo] = temp;
    }

    add(val) {
        this.items.push(val);
        this.heapifyUp();
    }

    peek() {
        if (!this.items.length) throw new Error('No items');
        return this.items[0];
    }

    poll() {
        if (!this.items.length) throw new Error('No Items');
        let item = this.items.shift();
        this.items.unshift(this.items.pop());
        this.heapifyDown();
        return item;
    }

    heapifyUp() {
        let index = this.items.length - 1;
        while (this.hasParent(index) && this.parent(index) > this.items[index]) {
            this.swap(this.getParentIndex(index), index);
            index = this.getParentIndex(index);
        }
    }

    heapifyDown() {
        let index = 0;

        while (this.hasLeftChild(index)) {
            let smallerChildIndex = this.getLeftChildIndex(index);

            if (this.hasRightChild(index) && this.rightChild(index) < this.leftChild(index)) {
                smallerChildIndex = this.getRightChildIndex(index);
            }

            if (this.items[smallerChildIndex] > this.items[index]) {
                break;
            } else {
                this.swap(smallerChildIndex, index);
            }
            index = smallerChildIndex;
        }
    }

    minHeapify(index) {
        while (this.hasParent(index) && this.items[index] < this.parent(index)) {
            this.swap(this.getParentIndex(index), index);
            index = this.getParentIndex(index);
        }
    }
}