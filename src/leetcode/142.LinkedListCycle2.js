//142. Linked List Cycle II

//Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

//To represent a cycle in the given linked list, we use an integer pos which represents the 
//position (0-indexed) in the linked list where tail connects to. 
//If pos is -1, then there is no cycle in the linked list.


//Explain:

//we have a slow and a fast pointers that are moving at the same time while the slow moves one step at a time 
//vs the fast moves two steps at a time. When there is a cycle, evetually the slow is going to meet the fast somewhere in
//the cycle. Then the slow has moved T steps while the fast has moved 2T steps.

//lets assume that there are n steps before the first node of the cycle, and m steps within the cycles.
//We can just say that the fast pointer has moved 2T = T + k*m (the total steps the fast has moved equals steps the slow has moved
//plus K * m inside the cycle). Then we get T = km; Once they meet, we have another pointer P start from the beginning, and 
// move P and slow one step at a time at the same time. When the P gets to the entry node, it has moved n + i * m while the slow 
//has moved k*m again; 

var detectCycle = function(head) {
    if (!head) return head;

    var
        slow = head,
        fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            slow = head;

            while (slow !== fast) {
                slow = slow.next;
                fast = fast.next;
            }

            return slow;
        }
    }

    return null;
};



//Hash table approach

var detectCycle = function(head) {
    if (!head) return head;

    var hash = {},
        curr = head;

    while (curr) {

        if (!hash[curr.val]) {
            hash[curr.val] = [];
            hash[curr.val].push(curr);
        } else {

            var idx = hash[curr.val].indexOf(curr);

            if (idx >= 0) {
                return curr;
            } else {
                hash[curr.val].push(curr);
            }
        }



        curr = curr.next;
    }

    return null;
};