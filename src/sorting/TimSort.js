export function TimSort(arr, RUN) {

    let container = [];

    let i = 0;
    while (i < arr.length) {
        let newArr = arr.slice(i, i + RUN);
        container.push(insertionSort(newArr));
        i = i + RUN;
    }

    mergeSort(container);

    return arr;
}


function insertionSort(arr, start, end) {
    if (arr.length < 2) return arr;

    let i = start + 1;

    while (i < end) {

        let j = i - 1;

        while (j > start) {
            if (arr[j + 1] < arr[j]) {
                swrap(arr, j + 1, j);
                j--;
            }
        }

        i++;
    }
}


function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function mergeSort(container) {
    if (container.length < 2) return container[0];

    let mid = Math.floor(container.length / 2),
        left = container.slice(0, mid),
        right = container.slice(mid, container.length);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let output = [];

    while (left.length != 0 && right.length != 0) {
        output.push(left[0] < right[0] ? left.shift() : right.shift());
    }

    while (left.length != 0) {
        output.push(left.shift());
    }

    while (right.length != 0) {
        output.push(right.shift());
    }

    return output;
}

console.log(TimSort([8, 6, 7, 3, 2, 3, 1]));