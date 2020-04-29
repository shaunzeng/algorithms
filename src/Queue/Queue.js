export class Queue {

    q = [];

    size() {
        return this.q.length;
    }

    enqueue(val) {
        this.q.push(val);
    }

    dequeue() {
        this.q.shift();
    }

    peek() {
        return this.q[0];
    }
}