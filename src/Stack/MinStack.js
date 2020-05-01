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