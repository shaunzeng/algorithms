export class Queue {

    _q = [];

    size() {
        return this._q.length;
    }

    enqueue(val) {
        this._q.push(val);
        return this.size();
    }

    dequeue() {
        if (this.size() > 0) {
            return this._q.shift();
        } else {
            return null;
        }
    }

    peek() {
        return this._q[0];
    }
}