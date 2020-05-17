// 725. Split Linked List in Parts

// Given a (singly) linked list with head node root, write a function to split the linked list into k consecutive linked list "parts".

// The length of each part should be as equal as possible: no two parts should have a size differing by more than 1. This may lead to some parts being null.

// The parts should be in order of occurrence in the input list, and parts occurring earlier should always have a size greater than or equal parts occurring later.

// Return a List of ListNode's representing the linked list parts that are formed.

// Examples 1->2->3->4, k = 5 // 5 equal parts [ [1], [2], [3], [4], null ]
// Example 1:
// Input:
// root = [1, 2, 3], k = 5
// Output: [[1],[2],[3],[],[]]
// Explanation:
// The input and each element of the output are ListNodes, not arrays.
// For example, the input root has root.val = 1, root.next.val = 2, \root.next.next.val = 3, and root.next.next.next = null.
// The first element output[0] has output[0].val = 1, output[0].next = null.
// The last element output[4] is null, but it's string representation as a ListNode is [].

var splitListToParts = function(root, k) {
    if (k == 1 || k == 0) return [root];

    var len = getLength(root);
    var width = Math.floor(len / k), // how long for each part
        r = len % k, // how many parts will be longer than width;
        ans = [],
        curr = root,
        prev = null;

    for (var i = 0; i < k; i++) {

        ans.push(curr);

        var count = width + (r > 0 ? 1 : 0);

        while (count > 0) {
            prev = curr;
            curr = curr.next;
            count--
        }
        if (prev) prev.next = null;
        r--;
    }

    return ans
};



function getLength(head) {
    let count = 0,
        curr = head;

    while (curr) {
        count++;
        curr = curr.next;
    };

    return count;
}

// calculate how many parts are more then average, current, prev pointers