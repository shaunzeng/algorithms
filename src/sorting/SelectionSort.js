export function SelectionSort(arr) {
    let len = arr.length,
        minIdx;

    for (let i = 0; i < len; i++) {
        minIdx = i;

        for (let j = i + 1; j < len; j++) {

            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }


        }

        if (minIdx !== i) {
            swap(arr, i, minIdx);
        }
    }

    return arr;
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}