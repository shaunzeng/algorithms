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