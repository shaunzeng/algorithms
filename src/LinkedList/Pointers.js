// 328. Odd Even Linked List

// Given a singly linked list, group all odd nodes together followed by the even nodes. Please note here we are talking about the node number and not the value in the nodes.
// You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.

// Example 1:

// Input: 1->2->3->4->5->NULL
// Output: 1->3->5->2->4->NULL
// Example 2:

// Input: 2->1->3->5->6->4->7->NULL
// Output: 2->3->6->7->1->5->4->NULL

var oddEvenList = function(head) {
    if (!head) return head;

    var oddHead, evenHead, curr, prevOdd, prevEven;
    curr = head, count = 0;

    while (curr) {
        count++;

        if (!oddHead) {
            oddHead = curr;
            prevOdd = oddHead;
        } else if (!evenHead) {
            evenHead = curr;
            prevEven = evenHead;
        }

        if (count !== 1 && count % 2 !== 0) {
            prevOdd.next = curr;
            prevOdd = prevOdd.next;
        } else if (count !== 2 && count % 2 == 0) {
            prevEven.next = curr;
            prevEven = prevEven.next;
        }
        curr = curr.next;
    }

    prevOdd.next = evenHead;
    if (prevEven) prevEven.next = null;

    return oddHead;

};

//Head pointers, current pointer, and previous pointers




// 86. Partition List

// Given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

// You should preserve the original relative order of the nodes in each of the two partitions.

// Example:

// Input: head = 1->4->3->2->5->2, x = 3
// Output: 1->2->2->4->3->5

var partition = function(head, x) {
    if (!head) return head;

    var lessHead, greaterHead, prevLess, prevGreater, curr;
    curr = head;

    while (curr) {

        if (curr.val < x) {
            if (!lessHead) {
                lessHead = curr;
                prevLess = lessHead;
            } else {
                prevLess.next = curr;
                prevLess = prevLess.next;
            }
        } else {
            if (!greaterHead) {
                greaterHead = curr;
                prevGreater = greaterHead;
            } else {
                prevGreater.next = curr;
                prevGreater = prevGreater.next;
            }
        }

        curr = curr.next;
    }

    if (prevLess) prevLess.next = greaterHead;
    if (prevGreater) prevGreater.next = null;
    return lessHead || greaterHead;
};