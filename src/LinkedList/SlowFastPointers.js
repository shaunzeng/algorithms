// 61. Rotate List

// Given a linked list, rotate the list to the right by k places, where k is non-negative.

// Example 1:

// Input: 1->2->3->4->5->NULL, k = 2
// Output: 4->5->1->2->3->NULL
// Explanation:
// rotate 1 steps to the right: 5->1->2->3->4->NULL
// rotate 2 steps to the right: 4->5->1->2->3->NULL
// Example 2:

// Input: 0->1->2->NULL, k = 4
// Output: 2->0->1->NULL
// Explanation:
// rotate 1 steps to the right: 2->0->1->NULL
// rotate 2 steps to the right: 1->2->0->NULL
// rotate 3 steps to the right: 0->1->2->NULL
// rotate 4 steps to the right: 2->0->1->NULL

var rotateRight = function(head, k) {
    if (!head) return head;

    var len = getLen(head);
    k = (k % len);

    if (k == 0) return head;

    var fast, slow, dummy = new ListNode(),
        count = 0;
    dummy.next = head;
    fast = dummy;
    slow = dummy;

    while (count < k) {
        fast = fast.next;
        count++;
    }

    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    }

    var temp = dummy.next;
    dummy.next = slow.next;
    slow.next = null;
    fast.next = temp;

    return dummy.next;

};


function getLen(node) {
    var count = 0;
    var curr = node;
    while (curr) {
        count++;
        curr = curr.next;
    }
    return count;
}