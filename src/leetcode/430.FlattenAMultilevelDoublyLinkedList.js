/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
    if (!head) return head;

    let stack = [],
        curr = head;

    // loop through linked list
    while (curr) {

        // if a child is found, point curr.next to child, and store the next to stack
        if (curr.child) {

            if (curr.next) {
                stack.push(curr.next);
            }

            curr.next = curr.child;
            curr.child.prev = curr;
            curr.child = null;

        }

        // continue moving curr
        if (curr.next) {
            curr = curr.next;
        } else {
            break
        }
    }

    // link tails back to curr;
    while (stack.length !== 0) {
        const tail = stack.pop();
        curr.next = tail;
        tail.prev = curr;

        while (curr.next) {
            curr = curr.next;
        }
    }

    return head;
};