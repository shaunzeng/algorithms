// 1019. Next Greater Node In Linked List

//We are given a linked list with head as the first node.  Let's number the nodes in the list: node_1, node_2, node_3, ... etc.
//Each node may have a next larger value: for node_i, next_larger(node_i) is the node_j.val such that j > i, node_j.val > node_i.val, 
//and j is the smallest possible choice.  If such a j does not exist, the next larger value is 0.
//Return an array of integers answer, where answer[i] = next_larger(node_{i+1}).
//Note that in the example inputs (not outputs) below, arrays such as [2,1,5] represent the serialization of a linked list with a head node value of 2, 
//second node value of 1, and third node value of 5.

//Example 1:

//Input: [2,1,5]
//Output: [5,5,0]
//Example 2:

//Input: [2,7,4,3,5]
//Output: [7,0,5,5,0]
//Example 3:

//Input: [1,7,5,1,9,2,5,1]
//Output: [7,9,9,9,0,5,0,0]


import { Stack } from '../Stack/Stack';

var nextLargerNodes = function(head) {
    if (!head) return head;

    var s = new Stack(), // Monotonic Stack
        curr = head,
        answer = [],
        idx = 0; // track index in the answer array;

    while (curr) {

        var peek = s.peek();

        // when stack is empty or current val is smaller then the last value in stack, push it while tracking index.
        if (s.isEmpty() || peek.val.val >= curr.val) {
            s.push({ val: curr, idx: idx });
        } else if (!s.isEmpty() && peek.val.val < curr.val) {

            // pop items in stack till you find the bigger value than current, as you pop, push current as next bigger 
            //value into answer array, track their position in the answer array;
            while (!s.isEmpty() && peek.val.val < curr.val) {
                console.log("pre poping : ", peek.val.val, curr.val)
                var item = s.pop();
                answer[item.idx] = curr.val;
                peek = s.peek();
            }
            s.push({ val: curr, idx: idx })
        }

        idx++;
        curr = curr.next;
    }


    if (!s.isEmpty()) {
        while (s.size()) {
            var item = s.pop();
            answer[item.idx] = 0;

        }
    }

    return answer
};

//Monotonic Stack: from top to bottom, the value is in accending order;
// when you find an item that is greater then the last item in stack, pop the items that are smaller till
// you find the item that is bigger than the current, then push the current. as you pop out the smaller items
// you need to push current as the next greater in position.