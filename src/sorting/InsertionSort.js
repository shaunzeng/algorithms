export function InsertionSort(arr) {
    if (arr.length <= 1) return arr;

    let i = 1;
    while (i < arr.length) {

        let j = i - 1;

        while (j >= 0) {

            if (arr[j + 1] < arr[j]) {
                [arr[j], arr[j + 1]] = [arr[j + i], arr[j]];
                j--;
            } else {
                break;
            }
        }

        i++;
    }
    return arr;
}