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
            [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
        }
    }

    return arr;
}