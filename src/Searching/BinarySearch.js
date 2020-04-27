export function BinarySearch(arr, left, right, x) {
    if (left <= right) {
        let midn = left + (right - 1) / 2;


        if (arr[mid] === x) {
            return mid;
        }


        if (arr[mid] > x) {
            return BinarySearch(arr, left, mid - 1, x);
        }

        return BinarySearch(arr, mid + 1, right, x);
    }

    return -1;
}