/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    if (!head || !head.next) return head;

    //slow fast pointers to find mid point
    var slow = head,
        fast = head,
        mid;

    while (fast.next != null && fast.next.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // break from the mid point then do merge sort
    mid = slow.next;
    slow.next = null;

    return merge(sortList(head), sortList(mid));

};

function merge(l1, l2) {
    if (l2 == null) return l1;
    if (l1 == null) return l2;

    var mergeHead;

    if (l1.val <= l2.val) {
        mergeHead = l1;
        mergeHead.next = merge(l1.next, l2);
    } else {
        mergeHead = l2;
        mergeHead.next = merge(l1, l2.next);
    }

    return mergeHead;
}