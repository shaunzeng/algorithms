/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    if (!head) return;

    var prev,
        curr,
        next,
        count = 1,
        dummy = new ListNode();

    dummy.next = head;
    curr = head;
    prev = dummy;
    next = curr.next;

    while (curr && count < n) {

        if (count < m) {
            // if pointer points to item before m, keep moving prev curr next
            prev = curr;
            curr = curr.next;
            next = curr.next;
        } else if (count >= m) {
            // if pointer points between m and n, do NOT move prev,
            // every time when swaping item, prev.next points to the new "next"
            var temp = prev.next
            curr.next = next.next;
            prev.next = next;
            next.next = temp;
            next = curr.next;
        }

        count++;
    }

    return dummy.next;
};