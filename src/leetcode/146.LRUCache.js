/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.hash = {};
    this.head = new Node('head', 'head', null, null);
    this.tail = new Node('tail', 'tail', null, null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.hash[key] == void 0) return -1;
    else {
        insertAfter(this.hash[key], this.head);
        return this.hash[key].value;
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.hash[key] !== void 0) {
        this.hash[key].value = value;
        insertAfter(this.hash[key], this.head);
    } else {
        if (Object.keys(this.hash).length == this.capacity) {
            console.log('deleting : ')
            deleteEndNode(this.tail, this.hash);
        }

        let newNode = new Node(key, value, null, null);
        this.hash[key] = newNode;
        insertAfter(newNode, this.head, true);
    };
};

function deleteEndNode(tail, hash) {
    let temp = tail.prev.prev,
        key = temp.next.key;
    temp.next = tail;
    tail.prev = temp;
    delete hash[key];
}

function insertAfter(node, after, isNew = false) {
    if (isNew) {
        let temp = after.next;
        after.next = node;
        node.prev = after;
        node.next = temp;
        temp.prev = node;
    } else {
        let temp1 = node.prev,
            temp2 = node.next;
        temp1.next = temp2;
        temp2.prev = temp1;
        node.prev = null;
        node.next = null;

        let temp3 = after.next;
        after.next = node;
        node.prev = after;
        node.next = temp3;
        temp3.prev = node;
    }
}

class Node {
    prev;
    next;
    key
    value;
    constructor(key, val, prev, next) {
        this.value = val;
        this.key = key;
        this.prev = prev;
        this.next = next;
    }
}

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */