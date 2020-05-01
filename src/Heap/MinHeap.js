export class MinIntHeap {

    constructor(items) {
        this.items = items || [];

        if (this.items.length >= 2) {
            let len = this.items.length - 1;

            for (let i = len; i >= 0; i--) {
                this.minHeapify(i);
            }
        }
    }

    getLeftChildIndex(parentIndex) {
        return parentIndex * 2 + 1;
    }

    getRightChildIndex(parentIndex) {
        return parentIndex * 2 + 2;
    }

    getParentIndex(ChildIndex) {
        return ChildIndex / 2 >> 0;
    }

    leftChild(parentIndex) {
        return this.items[this.getLeftChildIndex(parentIndex)];
    }

    rightChild(parentIndex) {
        return this.items[this.getRightChildIndex(parentIndex)];
    }

    parent(childIndex) {
        return this.items[this.getParentIndex(childIndex)];
    }

    hasLeftChild(parentIndex) {
        return this.getLeftChildIndex(parentIndex) < this.items.length;
    }

    hasRightChild(parentIndex) {
        return this.getRightChildIndex(parentIndex) < this.items.length;
    }

    hasParent(childIndex) {
        return childIndex / 2 > 0;
    }

    swap(idxOne, idxTwo) {
        let temp = this.items[idxOne];
        this.items[idxOne] = this.items[idxTwo];
        this.items[idxTwo] = temp;
    }

    add(val) {
        this.items.push(val);
        this.heapifyUp();
    }

    peek() {
        if (!this.items.length) throw new Error('No items');
        return this.items[0];
    }

    poll() {
        if (!this.items.length) throw new Error('No Items');
        let item = this.items.shift();
        this.items.unshift(this.items.pop());
        this.heapifyDown();
        return item;
    }

    heapifyUp() {
        let index = this.items.length - 1;
        while (this.hasParent(index) && this.parent(index) > this.items[index]) {
            this.swap(this.getParentIndex(index), index);
            index = this.getParentIndex(index);
        }
    }

    heapifyDown() {
        let index = 0;

        while (this.hasLeftChild(index)) {
            let smallerChildIndex = this.getLeftChildIndex(index);

            if (this.hasRightChild(index) && this.rightChild(index) < this.leftChild(index)) {
                smallerChildIndex = this.getRightChildIndex(index);
            }

            if (this.items[smallerChildIndex] > this.items[index]) {
                break;
            } else {
                this.swap(smallerChildIndex, index);
            }
            index = smallerChildIndex;
        }
    }

    minHeapify(index) {
        while (this.hasParent(index) && this.items[index] < this.parent(index)) {
            this.swap(this.getParentIndex(index), index);
            index = this.getParentIndex(index);
        }
    }
}