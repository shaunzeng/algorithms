export function HeapSort(arr) {
    if (arr.length <= 1) return arr;

    const swap = (indexOne, indexTwo) => {
        let temp = arr[indexOne];
        arr[indexOne] = arr[indexTwo];
        arr[indexTwo] = temp;
    }

    const hasParent = (index) => {
        return index / 2 > 0;
    }

    const hasLeftChild = (parentIndex) => {
        return getLeftChildIndex(parentIndex) < arr.length;
    }

    const hasRightChild = (parentIndex) => {
        return getRightChildIndex(parentIndex) < arr.length;
    }

    const getParentIndex = (childIndex) => {
        return childIndex / 2 >> 0;
    }

    const getLeftChildIndex = (parentIndex) => {
        return parentIndex * 2 + 1;
    }

    const getRightChildIndex = (parentIndex) => {
        return parentIndex * 2 + 2;
    }

    const parent = (childIndex) => {
        return arr[getParentIndex(childIndex)];
    }

    const leftChild = (parentIndex) => {
        return arr[getLeftChildIndex(parentIndex)];
    }

    const rightChild = (parentIndex) => {
        return arr[getRightChildIndex(parentIndex)];
    }



    const buildMaxHeap = () => {

    }


}