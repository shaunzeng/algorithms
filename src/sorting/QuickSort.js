// goal is to move pivot to its right position from start index to end index
// partition function moves the pivot to its right postion by swaping with smaller to its left, or bigger to its right
// till it two pointers meet, which means it find the position for the pivot;

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
            [arr[i], arr[j]] = [arr[j], arr[i]]; // pivot is arr[j]
            i++; // we have already compared arr[i] so no need to compare again;
        }

        while (i < j && arr[i] <= pivot) {
            i++;
        }

        if (i < j) {
            [arr[i], arr[j]] = [arr[j], arr[i]]; // pivot is arr[i]
            j--; // we have compared arr[j] no need to compare again;
        }

    }

    return i;
}

// time complaxity : n logn 

// worse case: n*n (n2) , when the pivot is 
//the geratest item or the least item.

//Pivot :
// 1. correct position in final sorted array;
// 2. Items to the left are smaller
// 3. items to the right are larger

//bad pivot : smallest item or largest item