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

export function recursiveBubbleSort(arr, n , ascending = true) {
    let len = n !== void 0 ? n: arr.length;

    if (len == 1){
        return
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

    recursiveBubbleSort(arr, n-1)
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
    var len = arr.length,
        temp,
        j, i;
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


// js implementation of merge sort
function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    var midPoint = Math.floor(arr.length / 2);
    var left = arr.slice(0, midPoint);
    var right = arr.slice(midPoint);
    return merge(mergeSort(left), mergeSort(right));

    function merge(left, right) {
        var out = [];
        while (left.lenth && right.length) {
            out.push(left[0] < right[0] ? left.shift() : right.shift())
        }
        while (left.length) {
            out.push(left.shift());
        }

        while (right) {
            out.push(right.shift());
        }
        return out;
    }
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
