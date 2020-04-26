export function QuickSort(arr, low, high) {
    if (low >= high) return;

    let mid = partition(arr, low, high);
    QuickSort(arr, low, mid - 1);
    QuickSort(arr, mid + 1, high);

    return arr;

}

function partition(arr, low, high) {
    let pivot = arr[low],
        i = low,
        j = high;

    while (i < j) {

        while (i < j && arr[j] >= pivot) {
            j--;
        }

        if (i < j) {
            swap(arr, i, j);
            i++;
        }

        while (i < j && arr[i] <= pivot) {
            i++;
        }

        if (i < j) {
            swap(arr, i, j);
            j--
        }

    }

    return i;
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