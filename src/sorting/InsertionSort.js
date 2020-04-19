export function InsertionSort(arr) {
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