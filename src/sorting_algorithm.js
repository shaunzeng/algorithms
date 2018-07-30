// bubble sort
export function bubbleSort(arr, ascending = true) {
    let len = arr.length;

    for (let i = 0; i < len-1; i++) {
        for (let j = 0 ; j < len - 1 - i; j++) {
            if (!!ascending) {
                if (arr[j] > arr[j+1]){
                    let temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            } else {
                if (arr[j] < arr[j+1]) {
                    let temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }
        console.log(arr, i, len -1-i);
    }

    return arr;
}

export function recursiveBubbleSort(arr, len = arr.length, ascending = true) {

    if (len == 1){
        return ;
    }

    for (let i = 0; i < len - 1; i++){
        if (!!ascending){
            if (arr[i] > arr[i+1]){
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        } else {
            if (arr[i] < arr[i+1]){
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        }
    }

    recursiveBubbleSort(arr, len-1, ascending);
    return arr;

}

// selection sort
export function selectionSort(arr, ascending){
    let len = arr.length,
        minIdx;
    
        for (let i = 0; i < len ; i++){
            minIdx = i;

            for (let j = i + 1; j < len; j++ ){
                if (!!ascending){
                    if (arr[j] < arr[minIdx]){
                        minIdx = j;
                    }
                } else {
                    if (arr[j] > arr[minIdx]){
                        minIdx = j;
                    }
                }
                
            }

            if (minIdx !== i){
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
        i,j,temp;
    
    for(i = 1; i < len; i++) {
        j = i;
        temp = arr[i];
        while(j>0 && arr[j-1]>temp){
            arr[j] = arr[j-1];
            j --;
        }
        arr[j] = temp;
    }

    return arr;
}


export function mergeSort(arr) {
    if (arr.length < 2){
        return arr;
    }

    let mid = Math.floor(arr.length/2),
        left = arr.slice(0, mid),
        right = arr.slice(mid, arr.length);

    const merge = (left, right) => {
        let output = [];

        while(left.length !== 0 && right.length !== 0 ) {
            output.push(left[0] < right[0] ? left.shift() : right.shift());
        }

        while(left.length !== 0) {
            output.push(left.shift());
        }

        while(right.length !== 0 ){
            output.push(right.shift());
        }

        return output;
    }

    return merge(mergeSort(left), mergeSort(right));
    
}


//Min Heap
export class MinIntHeap {

    items = [];
    size = 0;

    constructor(){
    }

    getLeftChildIndex(parentIndex){ return 2 * parentIndex + 1}
    getRightChildIndex(parentIndex){ return 2 * parentIndex + 2}
    getParentIndex(childIndex){return (childIndex - 1) / 2 >>0}

    hasLeftChild(index){return this.getLeftChildIndex(index) < this.size;}
    hasRightChild(index){return this.getRightChildIndex(index) < this.size;}
    hasParent(index){return this.getParentIndex(index) >= 0}

    leftChild(index){return this.items[this.getLeftChildIndex(index)]}
    rightChild(index){return this.items[this.getRightChildIndex(index)]}
    parent(index){return this.items[this.getParentIndex(index)]}

    swap(indexOne, indexTwo){
        let temp = this.items[indexOne];
        this.items[indexOne] = this.items[indexTwo];
        this.items[indexTwo] = temp;
    }

    peek(){
        if(this.size == 0) throw new Error('Empty Heap');
        return this.items[0]
    }

    poll(){
        if(this.size == 0) throw new Error('Empty Heap');

        let item = this.items[0];
        this.items[0] = this.items[this.size - 1];
        this.size--;
        this.heapifyDown();
        return item;
    }

    add(item){
        this.items[this.size] = item;
        this.size++;
        this.heapifyUp();
    }

    heapifyUp(){
        let index = this.size - 1;
        while(this.hasParent(index) && this.parent(index) > this.items[index]){
            let parentIndex = this.getParentIndex(index);
            this.swap(parentIndex, index);
            index = parentIndex;
        }
    }

    heapifyDown(){
        let index = 0;
        while(this.hasLeftChild(index)) {
            let smallerChildIndex = this.getLeftChildIndex(index);

            if(this.hasRightChild(index) && this.rightChild(index) < this.leftChild(index)){
                smallerChildIndex = this.getRightChildIndex(index);
            }

            if (this.items[index] < this.items[smallerChildIndex]){
                break;
            } else {
                this.swap(index, smallerChildIndex);
            }
            index = smallerChildIndex;
        }
    }
}

export function heapSort(arr){
    if (arr.length <= 1) return arr;
    let output = [];
    let heap = new MinIntHeap();

    const buildMinHeap = (arr, hrsp) => {
        arr.forEach((val, idx)=>{
            heap.add(val);
        });

        return heap;
    }

    buildMinHeap(arr, heap);

    heap.items.forEach((val, idx) => {
        output.push(heap.poll());
    })

    return output;

}

var Stack = function(){
    var self = this;
    self.data = [];
    self.push = push;
    self.pop = pop;
    self.peek = peek;
    self.size = size;
    
    function push(val){
        self.data.push(val);
    }
    
    function pop() {
        return self.data.pop();
    }
    
    function peek(){
        return self.data[self.data.length - 1];
    }
    
    function size(){
        return self.data.length;
    }
} 

function GraphNode(val){
    this.val = val;
    this.neighbors = [];
    this.visited = false;
    this.player = null;
}

var player_one = 0;
var player_two = 0;

function DFS(starting_node) {
    var s = new Stack();
    var visited = [];

    s.push(starting_node);

    while(s.size() != 0) {
        var current = s.pop();

        if (!current.visited){
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
A.player ='one';
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


A.neighbors = [B,D,E];
B.neighbors = [A,D,E,F,C];
C.neighbors = [B,E,F];
D.neighbors = [A,B,E,H,G];
E.neighbors = [A,B,C,D,F,G,H,I];
F.neighbors = [C,B,E,H,I];
G.neighbors = [D,E,H];
H.neighbors = [G,D,E,F,I];
I.neighbors = [E,F,H];

DFS(A);
