export function SelectionSort(arr, ascending) {
    let len = arr.length,
        minIdx;

    for (let i = 0; i < len; i++) {
        minIdx = i;

        for (let j = i + 1; j < len; j++) {
            if (!!ascending) {
                if (arr[j] < arr[minIdx]) {
                    minIdx = j;
                }
            } else {
                if (arr[j] > arr[minIdx]) {
                    minIdx = j;
                }
            }

        }

        if (minIdx !== i) {
            let temp = arr[i];
            arr[i] = arr[minIdx];
            arr[minIdx] = temp;
        }
    }

    return arr;
}