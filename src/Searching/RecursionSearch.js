export function RecursionSearch(arr, left, right, x) {

    if (left > right) return -1;
    if (arr[left] === x) return left;
    if (arr[right] === x) return right;
    return RecursionSearch(arr, left + 1, right - 1, x);
}