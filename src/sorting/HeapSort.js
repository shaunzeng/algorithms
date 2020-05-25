export function HeapSort(arr) {

    if (arr.length < 2) return;

    let len = arr.length;

    //build max heap

    let idx = Math.floor(len / 2 - 1); // first element that has child / children

    for (let i = idx; i >= 0; i--) {
        heapify(arr, i, len);
    }

    // swap max node to the end and heaify every time there is a swap;
    for (let i = len - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, 0, i);
    }
    return arr;
}


function heapify(arr, i, len) {
    let max = i,
        left = i * 2 + 1,
        right = i * 2 + 2;

    if (left < len && arr[left] > arr[max]) {
        max = left;
    }


    if (right < len && arr[right] > arr[max]) {
        max = right;
    }


    if (max !== i) {
        [arr[i], arr[max]] = [arr[max], arr[i]];
        heapify(arr, max, len);
    }
}





// n + (n-1) + (n-2) + (n-3) .... 2 + 1

// for (let 1 ; i< n i= i*2) time complexity : logn