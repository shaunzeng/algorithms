export function InsertionSort(arr) {
    if (arr.length <= 1) return arr;

    let i = 1;
    while (i < arr.length) {

        let j = i - 1;

        while (j >= 0) {

            if (arr[j + 1] < arr[j]) {
                swap(arr, j + 1, j);
                j--;
            } else {
                break;
            }
        }

        i++;
    }
    return arr;
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}