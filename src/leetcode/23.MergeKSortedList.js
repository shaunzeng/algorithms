/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if (!lists || lists.length == 0) return null;
    lists = lists.filter(l => !!l);

    if (lists.length == 0) return null;
    if (lists.length < 2) return lists[0];

    var head, tail;

    var len = lists.length;
    var idx = Math.floor(len / 2 - 1);

    for (var i = idx; i >= 0; i--) {
        heapify(lists, i, len);
    }


    while (lists.length !== 0) {

        var smallest = lists[0];

        if (!head) {
            head = smallest;
            tail = smallest;

            if (lists[0].next) {
                lists[0] = lists[0].next;
                heapify(lists, 0, lists.length);
                tail.next = null;
            } else if (!lists[0].next) {
                headTailSwap(lists);
                heapify(lists, 0, lists.length)
            }

        } else {
            tail.next = smallest;
            tail = tail.next;

            if (lists[0].next) {

                lists[0] = lists[0].next;
                heapify(lists, 0, lists.length);
                tail.next = null;

            } else if (!lists[0].next) {

                if (lists.length == 1) {
                    //  tail.next = lists[0];
                    break;
                }

                headTailSwap(lists);
                heapify(lists, 0, lists.length);

            }
        }
    }

    return head;
};

function heapify(arr, i, len) {
    if (!arr) return;
    var min = i,
        left = i * 2 + 1,
        right = i * 2 + 2;

    if (left < len && arr[left].val < arr[min].val) {
        min = left;
    }

    if (right < len && arr[right].val < arr[min].val) {
        min = right;
    }

    if (min !== i) {
        swap(arr, i, min)
        heapify(arr, min, len);
    }
}

function PQ() {
    this._list = [];

    this.add = function(node) {
        this._list.push(node);
        var parentIdx = Math.floor((this._.list.length - 1) / 2);
        var parent = this._list[parentIdx];
    }
}

function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function headTailSwap(arr) {
    var last = arr.pop();
    var first = arr.shift();
    arr.unshift(last);
    return arr;
}