'use strict'

// js implementation of a linked list
function LinkedList() {
    var Node = function(data) {
        this.data = data || null;
        this.next = null;
    }
    var head = null;
    var length = 0;

    this.append = append;
    this.removeAt = removeAt;
    this.insert = insert;
    this.print = print;
    this.indexOf = indexOf;
    this.getHead = getHead;
    this.size = size;
    this.isEmpty = isEmpty;
    this.remove = remove;
    this.dedup = dedup;

    function append(element) {
        var newNode = new Node(element);
        var current;

        if (head === null) {
            head = newNode;
        } else {
            current = head;

            while (current.next != null) {
                current = current.next;
            }

            current.next = newNode;
        }

        length++;
    }

    function removeAt(position) {
        if (position > -1 && position < length) {
            var current = head,
                prev,
                index = 0;
            if (position === 0) {
                head = current.next;
            } else {
                while (index++ < position) {
                    prev = current;
                    current = current.next;
                }
                prev.next = current.next;
            }
            length--;
            return current.data;
        } else {
            return null;
        }
    }

    function insert(position, data) {
        if (position >= 0 && position <= length) {
            var node = new Node(data),
                current = head,
                prev,
                index = 0;
            if (position === 0) {
                node.next = current;
                head = node;
            } else {
                while (index++ < position) {
                    prev = current;
                    current = current.next;
                }
                node.next = current;
                prev.next = node;
            }
            length++;
            return true;
        } else {
            return false;
        }
    }

    function print() {
        var arr = [];
        var current;

        if (head === null) {
            console.log("Empty");
        } else {
            current = head;
            while (current != null) {
                arr.push(current.data);
                current = current.next;
            }
        }

    }

    function indexOf(data) {
        var current = head,
            index = -1;
        while (current) {
            if (data === current.data) {
                return index;
            }
            index++;
            current = current.next;
        }

        return -1;
    }

    function remove(data) {
        var index = this.indexOf(data);
        return this.removeAt(index);
    }

    function isEmpty() {
        return length === 0;
    }

    function size() {
        return length;
    }

    function getHead() {
        return head;
    }


    function dedup() {
        var n = head;
        while (n != null) {
            var current = n;
            while (current.next != null) {
                if (current.next.data === n.data) {
                    current.next = current.next.next;
                } else {
                    current = current.next;
                }
            }
            n = n.next;
        }
    }
}

// js implementation of Hash Table
function HashTable() {
    this.table = new Array(137);
    this.hashing = betterHash;
    this.showDistro = showDistro;
    this.put = put;
    this.get = get;

    function simpleHash(data) {
        var total = 0;
        for (var i = 0; i < data.length; i++) {
            total += data.charCodeAt(i);
        }
        return total % this.table.length;
    }

    function betterHash(str) {
        const H = 37;
        var total = 0;
        for (var i = 0; i < str.length; i++) {
            total += H * total + str.charCodeAt(i);
        }
        total = total % this.table.length;
        if (total < 0) {
            total += this.table.length - 1;
        }
        return parseInt(total);
    }

    function put(data) {
        var pos = this.hashing(data);
        this.table[pos] = data;
    }

    function showDistro() {
        var n = 0,
            len = this.table.length;
        for (var i = 0; i < len; i++) {
            if (this.table[i] != undefined) {
                console.log(i + ' : ' + this.table[i]);
            }
        }
    }

    function get(key) {
        return this.table[this.hashing(key)];
    }


    function getRandomInt(min, max) {
        return Math.floor(Math.randome() * (max - min + 1)) + min;
    }
}

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


    function findPath(n){
        var root = this.root;
        var path = [];
        var isFound = false;
        this.preOrder(root, function(data){
            if (data == n){
                isFound = true;
            }

            if (isFound){
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

function findPath(root, num){
    var path = [];
    var isFound = false;
    var target = num;

    traverse(root, function(n){
        if (!isFound){
            path.push(n);
        }

        if (n === target){
            isFound = true;
        }
    });

    return path;
}
var findLCA = function (node, n1, n2) {
    if(node === null)
        return null;
    else if(node === n1 || node === n2)
        return node;
    var left = findLCA(node.left, n1, n2);
    var right = findLCA(node.right, n1, n2);
    if(left !== null && right !== null)
        return node;
    return (left !== null ? left : right);
}






// implement a stack that supports push, pop, top, and retrive the minimun element in constant time : leetcode 155
// solution: have an another stack that keeps track on the minimun, 
function MinStack(){
	var stack = [];
	var minStack = [];

	this.push = push;
	this.pop = pop;
	this.top = top;
	this.getMin = getMin;


	function push(el){
		var arr = stack.unshift(el);
		checkMinPush(el);
		return arr;
	}

	function pop(){
		var el = stack.shift();
		checkMinPop(el);
		return el;
	}

	function top(){
		return stack[0];
	}

	function getMin(){
		return minStack[0];
	}

	function checkMinPush(el){
		if (minStack.length === 0 ){
			minStack.push(el);
		} else if (el < minStack[0]) {
			minStack.unshift(el);
		}
	}

	function checkMinPop(el){
		if (el <= minStack[0]){
			minStack.shift();
		}
	}
}

var minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   // Returns -3.
minStack.pop();
minStack.top();      // Returns 0.
minStack.getMin();   // Returns -2.