export function BubbleSort(arr) {

    if (arr.length < 2) return arr;

    let flag = false;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                flag = true;
                swap(arr, j, j + 1);
            }
        }

        if (flag == false) {
            break;
        }
    }

    return arr;
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

///optimization add flag check if sorted, if its sorted we just have to run n times and check the flag;