export function MergeSort(arr) {
    if (arr.length < 2) return arr;

    let mid = Math.floor(arr.length / 2),
        left = arr.slice(0, mid),
        right = arr.slice(mid, arr.length);

    return merge(MergeSort(left), MergeSort(right));
}


function merge(left, right) {
    let output = [];


    while (left.length > 0 && right.length > 0) {
        output.push(left[0] <= right[0] ? left.shift() : right.shift());
    }

    while (left.length > 0) {
        output.push(left.shift());
    }

    while (right.length > 0) {
        output.push(right.shift());
    }

    return output;
}


// merge linked list 


function ListNode(val, next) {
    this.val = val || null;
    this.next = next || null;
}


function mergeSortLinkedList(head) {
    if (!head || !head.next) return head;

    var mid, slow = head,
        fast = head;

    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    mid = slow.next;
    slow.next = null;

    return mergeList(mergeSortedLinkedList(head), mergeSortedLinkedList(mid));
}


// recursively
function mergeList(l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;

    var head;

    if (l1.val < l2.val) {
        head = l1;
        head.next = mergeList(l1.next, l2);
    } else {
        head = l2;
        head.next = mergeList(l1, l2.next);
    }

    return head;
}



// iteratively
function mergeListIteration(l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;

    var head, prev, headL = l1,
        headR = l2,
        dummy = new ListNode();


    while (l1 && l2) {
        if (l1.val < l2.val) {
            if (!head) {
                head = l1;
                l1 = l1.next;
                prev = head;
            } else {
                prev.next = l1;
                l1 = l1.next;
                prev = prev.next;
            }
        } else {
            if (!head) {
                head = l2;
                l2 = l2.next;
                prev = head;
            } else {
                prev.next = l2;
                l2 = l2.next;
                prev = prev.next;
            }
        }
    }

    if (l1) {
        prev.next = l1;
    } else if (l2) {
        prev.next = l2;
    }

    return head;


}