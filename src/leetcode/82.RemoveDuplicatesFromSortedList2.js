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
var deleteDuplicates = function(head) {
    if (!head) return head;

    var dummy = new ListNode(),
        prev,
        curr,
        next;

    dummy.next = head;
    prev = dummy;
    curr = head,
        next = curr.next;

    while (curr) {

        if (next && curr.val !== next.val) {
            prev = curr;
            curr = curr.next;
            next = curr.next;

        } else if (next && curr.val === next.val) {
            while (curr && curr.next && curr.val === curr.next.val) {
                curr = curr.next;
            }

            next = curr.next;
            prev.next = next;
            curr = next;
            next = (curr ? curr.next : null);

        } else {
            break;
        }
    }

    return dummy.next
};