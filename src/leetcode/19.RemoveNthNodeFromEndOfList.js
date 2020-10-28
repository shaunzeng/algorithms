/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if (!head) return head;

    var len = getLength(head);
    n = len - n;

    var prev, curr, next, dummy = new ListNode(),
        count = 0;
    dummy.next = head;
    prev = dummy;
    curr = head;
    next = curr.next;

    while (n > 0) {
        prev = curr;
        curr = curr.next;
        next = curr.next;
        n--;
    }

    prev.next = next;

    return dummy.next;
};

function getLength(node) {
    var curr = node,
        count = 0;

    while (curr) {
        curr = curr.next;
        count++;
    }

    return count;
}