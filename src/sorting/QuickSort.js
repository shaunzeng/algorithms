export function QuickSort(arr, low, high) {
    if (items.length > 1) {
        let pi = partition(arr, low, high);

        if (low < pi - 1) {
            QuickSort(arr, low, pi - 1);
        }

        if (pi < high) {
            QuickSort(arr, pi, high);
        }
    }

    return items;
}

function partition(arr, low, high) {
    let pivot = arr[Math.floor]
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

// time complaxity : n logn 

// worse case: n*n (n2) , when the pivot is 
//the geratest item or the least item.

//Pivot :
// 1. correct position in final sorted array;
// 2. Items to the left are smaller
// 3. items to the right are larger

//bad pivot : smallest item or largest item

console.log(QuickSort([10, 80, 30, 70, 90, 40, 50, 70], 0, 7));