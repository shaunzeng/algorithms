export function ShellSort(arr) {
    if (arr.length < 2) return;

    let gap = Math.floor(arr.length / 2),
        len = arr.length;

    while (gap > 0) {

        for (let i = 0; i < len - gap; i++) {

            if (arr[i] > arr[i + gap]) {
                swap(arr, i, i + gap);

                for (let j = i; j > 0; j = j - gap) {
                    if (arr[j] < arr[j - gap]) {
                        swap(arr, j, j - gap);
                    } else {
                        break;
                    }
                }
            }
        }

        gap = Math.floor(gap / 2);
    }

    return arr;
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}