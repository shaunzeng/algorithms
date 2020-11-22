/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if (!head) return null;

    let nextOrder = [], // tracks order
        randomOrderDic = new Map(), // track random link with positions pair
        curr = head;

    while (curr !== null) {
        nextOrder.push(curr);
        curr = curr.next;
    };

    for (let i = 0; i < nextOrder.length; i++) {
        const r = nextOrder[i].random;
        randomOrderDic.set(i, r === null ? r : getPosition(r, nextOrder));
    }


    let dummy = new Node('dummy', null, null),
        curr2 = dummy,
        newDic = new Map();

    for (let i = 0; i < nextOrder.length; i++) {
        curr2.next = new Node(nextOrder[i].val, null, null);
        curr2 = curr2.next;
        newDic.set(i, curr2);
    }

    let j = 0;
    curr2 = dummy.next;

    while (curr2 !== null) {
        let r = newDic.get(randomOrderDic.get(j));

        curr2.random = r;
        curr2 = curr2.next;
        j++;

    }


    return dummy.next;

};


function getPosition(node, arr) {
    return arr.findIndex((n) => n === node);
}