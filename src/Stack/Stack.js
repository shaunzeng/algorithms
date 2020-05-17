export class Stack {

    _storage = [];
    _pointer = -1;
    _temp = 0;

    push(data) {
        this._storage.push(data);
        this._pointer++;
    }

    pop() {
        if (this._pointer >= 0) {
            this._pointer--;
            return this._storage.pop();
        } else {
            this._pointer = -1;
        }
    }

    peek() {
        if (this._pointer >= 0) {
            this._temp = this._storage[this._pointer];
            this._storage.pop();
            this._pointer--;

            return this._temp;
        } else {
            this._pointer = -1;
        }
    }

    size() {
        if (this._pointer >= 0) {
            return (this._pointer + 1);
        } else {
            return 0;
        }
    }

    clear() {
        this._storage = [];
        this._pointer = -1;
    }

    show() {
        if (this._pointer >= 0) {
            return this._storage[this._storage.length];
        }
    }

    isEmpty() {
        return this.size() === 0;
    }
}