// bubble sort
export function bubbleSort(arr, ascending = true) {
    let len = arr.length;

    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (!!ascending) {
                if (arr[j] > arr[j + 1]) {
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            } else {
                if (arr[j] < arr[j + 1]) {
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }

    return arr;
}

export function recursiveBubbleSort(arr, len = arr.length, ascending = true) {

    if (len == 1) {
        return;
    }

    for (let i = 0; i < len - 1; i++) {
        if (!!ascending) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        } else {
            if (arr[i] < arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
    }

    recursiveBubbleSort(arr, len - 1, ascending);
    return arr;

}

// selection sort
export function selectionSort(arr, ascending) {
    let len = arr.length,
        minIdx;

    for (let i = 0; i < len; i++) {
        minIdx = i;

        for (let j = i + 1; j < len; j++) {
            if (!!ascending) {
                if (arr[j] < arr[minIdx]) {
                    minIdx = j;
                }
            } else {
                if (arr[j] > arr[minIdx]) {
                    minIdx = j;
                }
            }

        }

        if (minIdx !== i) {
            let temp = arr[i];
            arr[i] = arr[minIdx];
            arr[minIdx] = temp;
        }
    }

    return arr;
}

// insertion sort
export function insertionSort(arr) {
    let len = arr.length,
        i, j, temp;

    for (i = 1; i < len; i++) {
        j = i;
        temp = arr[i];
        while (j > 0 && arr[j - 1] > temp) {
            arr[j] = arr[j - 1];
            j--;
        }
        arr[j] = temp;
    }

    return arr;
}


export function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }

    let mid = Math.floor(arr.length / 2),
        left = arr.slice(0, mid),
        right = arr.slice(mid, arr.length);

    const merge = (left, right) => {
        let output = [];

        while (left.length !== 0 && right.length !== 0) {
            output.push(left[0] < right[0] ? left.shift() : right.shift());
        }

        while (left.length !== 0) {
            output.push(left.shift());
        }

        while (right.length !== 0) {
            output.push(right.shift());
        }

        return output;
    }

    return merge(mergeSort(left), mergeSort(right));

}

var Stack = function() {
    var self = this;
    self.data = [];
    self.push = push;
    self.pop = pop;
    self.peek = peek;
    self.size = size;

    function push(val) {
        self.data.push(val);
    }

    function pop() {
        return self.data.pop();
    }

    function peek() {
        return self.data[self.data.length - 1];
    }

    function size() {
        return self.data.length;
    }
}

function GraphNode(val) {
    this.val = val;
    this.neighbors = [];
    this.visited = false;
    this.player = null;
}


function DFS(starting_node) {
    var s = new Stack();
    var visited = [];

    s.push(starting_node);

    while (s.size() != 0) {
        var current = s.pop();

        if (!current.visited) {
            current.visited = true;

            console.log('visiting node : ', current.val);

            for (var i = 0; i < current.neighbors.length; i++) {
                if (!current.neighbors[i].visited) {
                    s.push(current.neighbors[i]);
                }

            }
        }
    }
}

var A = new GraphNode('A');
A.player = 'one';
var B = new GraphNode('B');
var C = new GraphNode('C');
var D = new GraphNode('D');
D.player = 'one';
var E = new GraphNode('E');
var F = new GraphNode('F');
var G = new GraphNode('G');
G.player = 'one';
var H = new GraphNode('H');
var I = new GraphNode('I');


A.neighbors = [B, D, E];
B.neighbors = [A, D, E, F, C];
C.neighbors = [B, E, F];
D.neighbors = [A, B, E, H, G];
E.neighbors = [A, B, C, D, F, G, H, I];
F.neighbors = [C, B, E, H, I];
G.neighbors = [D, E, H];
H.neighbors = [G, D, E, F, I];
I.neighbors = [E, F, H];

DFS(A);



// heapSort using Min Int Heap 
export function heapSort(arr) {
    if (arr.length <= 1) return arr;


    const buildMinHeap = () => {
        let len = arr.length - 1;

        for (let i = len; i > 0; i--) {
            heapifyUp(i);
        }
    }

    const swap = (indexOne, indexTwo) => {
        let temp = arr[indexOne];
        arr[indexOne] = arr[indexTwo];
        arr[indexTwo] = temp;
    }

    const hasParent = (index) => {
        return index / 2 > 0;
    }

    const hasLeftChild = (parentIndex) => {
        return getLeftChildIndex(parentIndex) < arr.length;
    }

    const hasRightChild = (parentIndex) => {
        return getRightChildIndex(parentIndex) < arr.length;
    }

    const getParentIndex = (childIndex) => {
        return childIndex / 2 >> 0;
    }

    const getLeftChildIndex = (parentIndex) => {
        return parentIndex * 2 + 1;
    }

    const getRightChildIndex = (parentIndex) => {
        return parentIndex * 2 + 2;
    }

    const parent = (childIndex) => {
        return arr[getParentIndex(childIndex)];
    }

    const leftChild = (parentIndex) => {
        return arr[getLeftChildIndex(parentIndex)];
    }

    const rightChild = (parentIndex) => {
        return arr[getRightChildIndex(parentIndex)];
    }

    const heapifyUp = (index) => {
        while (hasParent(index) && arr[index] < parent(arr, index)) {
            swap(index, getParentIndex(index));
            index = getParentIndex(index);
        }
    }

    const heapifyDown = (arr) => {
        if (arr.length < 2) return arr;
        arr.unshift(arr.pop());
        let index = 0;
        while (hasLeftChild(index)) {
            let smallerChildIndex = getLeftChildIndex(index);

            if (hasRightChild(index) && rightChild(index) < leftChild(index)) {
                smallerChildIndex = getRightChildIndex(index);
            }

            if (arr[smallerChildIndex] > arr[index]) {
                break;
            } else {
                swap(smallerChildIndex, index);
            }

            index = smallerChildIndex;
        }
    }

    buildMinHeap(arr);

    let output = [];
    while (arr.length > 0) {
        output.push(arr.shift());
        heapifyDown(arr);
    }

    return output;
}


export function radixSort(arr) {

}

export function quickSort(A, l, r) {

}