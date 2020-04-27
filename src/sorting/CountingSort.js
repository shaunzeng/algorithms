// @param : array, k = number of unique input
export function CountingSort(arr, k) {

    if (arr.length < 2) return;

    let count = initialzieCount(k);

}


function initialzieCount(k) {
    let count = [];

    for (let i = 0; i < k; i++) {
        count.push(0);
    }
}

//works on an array that has a range.