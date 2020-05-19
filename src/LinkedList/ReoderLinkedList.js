/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */




//143. Reorder List

//Given a singly linked list L: L0→L1→…→Ln-1→Ln,
//reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…

//You may not modify the values in the list's nodes, only nodes itself may be changed.

//Example 1:

//Given 1->2->3->4, reorder it to 1->4->2->3.
//Example 2:

//Given 1->2->3->4->5, reorder it to 1->5->2->4->3.



//explain
// cut the linked list in half from the middle (slow fast pointers)
// store the first half in queue, the second half in stack,
// and pop/shift both the same time to re point to each other,
// watch for the use of pointers, when cut in half, you ll need to find the prev, instead of using slow to accomendate
// the scenario when odd number of list is given.
// always add a dummy node to make things easier;
// time complexity is O(n)


var reorderList = function(head) {
    if (!head) return head;

    var dummy = new ListNode(),
        slow = head,
        fast = head,
        prev = dummy,
        queue = [],
        stack = [];

    dummy.next = head;

    while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }

    var sHead = prev.next;
    prev.next = null;


    while (head) {
        queue.push(head);
        head = head.next;
    }

    while (sHead) {
        stack.push(sHead);
        sHead = sHead.next;
    }


    prev = dummy;
    var tail;
    while (queue.length !== 0 && stack.length !== 0) {
        var first = queue.shift();
        var second = stack.pop();

        prev.next = first;
        first.next = second;
        prev = second;
        second.next = null;
        tail = second;
        console.log(prev.val, first.val, second.val)
    }

    while (queue.length !== 0) {
        tail.next = queue.shift();
    }

    while (stack.length !== 0) {
        tail.next = stack.pop();
    }

    if (tail.next) {
        tail.next.next = null;
    };

    return dummy.next;

};