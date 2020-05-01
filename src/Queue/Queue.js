export class Queue {

    _q = [];
    _first = 0;
    _last = -1;

    size() {
        return this._last - this._first + 1;
    }

    enqueue(val) {
        this._last += 1;
        this._q[this._last] = val;
        return this.size();
    }

    dequeue() {
        if (this._first <= this._last) {
            var val = this._q[this._first];

            delete this._q[this._first];
            this._first += 1;

            return val;
        }
    }

    peek() {
        return this._q[this._first];
    }
}