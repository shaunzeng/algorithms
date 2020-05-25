export function BubbleSort(arr) {

    if (arr.length < 2) return arr;

    let isSorted = true;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                isSorted = false; // optimization: in case its sorted already , adding a flag to check if first loop everything is sorted
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }

        if (isSorted) {
            break;
        }
    }

    return arr;
}



///optimization add flag check if sorted, if its sorted we just have to run n times and check the flag;