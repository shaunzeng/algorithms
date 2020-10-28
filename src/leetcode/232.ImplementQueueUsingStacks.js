/**
 * Initialize your data structure here.
 */

var Stack = function() {
    var self = this;

    self.data = [];
    self.push = push;
    self.pop = pop;
    self.peek = peek;
    self.size = size;

    function push(val) {
        self.data.push(val);
    }

    function pop() {
        return self.data.pop();
    }

    function peek() {
        return self.data[self.data.length - 1];
    }

    function size() {
        return self.data.length;
    }
}


var MyQueue = function() {
    this.s1 = new Stack();
    this.s2 = new Stack();
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.s1.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if (this.s2.size()) {
        return this.s2.pop();
    } else {
        while (this.s1.size()) {
            this.s2.push(this.s1.pop());
        }

        return this.s2.pop();
    }
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if (this.s2.size()) {
        return this.s2.peek();
    } else {
        while (this.s1.size()) {
            this.s2.push(this.s1.pop());
        }

        return this.s2.peek();
    }
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    if (this.s1.size() || this.s2.size()) return false;
    return true;
};