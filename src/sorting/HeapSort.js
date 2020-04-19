export function HeapSort(arr) {
    if (arr.length <= 1) return arr;


    const buildMinHeap = () => {
        let len = arr.length - 1;

        for (let i = len; i > 0; i--) {
            heapifyUp(i);
        }
    }

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

    const heapifyUp = (index) => {
        while (hasParent(index) && arr[index] < parent(arr, index)) {
            swap(index, getParentIndex(index));
            index = getParentIndex(index);
        }
    }

    const heapifyDown = (arr) => {
        if (arr.length < 2) return arr;
        arr.unshift(arr.pop());
        let index = 0;
        while (hasLeftChild(index)) {
            let smallerChildIndex = getLeftChildIndex(index);

            if (hasRightChild(index) && rightChild(index) < leftChild(index)) {
                smallerChildIndex = getRightChildIndex(index);
            }

            if (arr[smallerChildIndex] > arr[index]) {
                break;
            } else {
                swap(smallerChildIndex, index);
            }

            index = smallerChildIndex;
        }
    }

    buildMinHeap(arr);

    let output = [];
    while (arr.length > 0) {
        output.push(arr.shift());
        heapifyDown(arr);
    }

    return output;
}