/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {

    if (!l1 && !l2) return null;

    let dummy1 = new ListNode(null, l1),
        dummy2 = new ListNode(null, l2),
        dummy = new ListNode(null, null),
        curr1, curr2, curr;

    curr1 = dummy1.next;
    curr2 = dummy2.next;
    curr = dummy;
    carry = 0;

    while (curr1 || curr2 || carry > 0) {

        let res = 0;

        res += carry;

        if (curr1) {
            res += curr1.val;
            curr1 = curr1.next;
        }

        if (curr2) {
            res += curr2.val;
            curr2 = curr2.next;
        }


        if (res > 9) {
            carry = 1;
            res -= 10;
        } else {
            carry = 0;
        }

        curr.next = new ListNode(res, null);
        curr = curr.next;
    }

    return dummy.next;
};