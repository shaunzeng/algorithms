export function HeapSort(arr) {

    if (arr.length < 2) return;

    let len = arr.length;

    //build max heap

    let idx = Math.floor(len / 2 - 1);

    for (let i = idx; i >= 0; i--) {
        heapify(arr, i, len);
    }
    console.log('done : ', arr);
    console.log(' ');


    // swap max node to the end and heaify every time there is a swap;
    for (let i = len - 1; i > 0; i--) {
        swap(arr, 0, i);
        heapify(arr, 0, i);
    }
    return arr;
}


function heapify(arr, i, len) {
    let max = i,
        left = getLeftChildIndex(i),
        right = getRightChildIndex(i);

    if (left < len && arr[left] > arr[max]) {
        max = left;
    }


    if (right < len && arr[right] > arr[max]) {
        max = right;
    }


    if (max !== i) {
        swap(arr, i, max);
        heapify(arr, max, len);
    }
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}


function getLeftChildIndex(parentIndex) {
    return parentIndex * 2 + 1;
}

function getRightChildIndex(parentIndex) {
    return parentIndex * 2 + 2;
}





// n + (n-1) + (n-2) + (n-3) .... 2 + 1

// for (let 1 ; i< n i= i*2) time complexity : logn

console.log(HeapSort([10, 80, 30, 70, 90, 40, 50, 70]));