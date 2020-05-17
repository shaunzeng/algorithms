class Node {
    val;
    next;
    constructor(val, next) {
        this.val = val;
        this.next = next || null;
    }
}

export class LinkedList {
    length = 0;
    head = null;

    constructor() {}

    size() {
        return this.length;
    }

    empty() {
        return this.length === 0;
    }

    valueAt() {}

    pushFront(value) {
        var newNode = new Node(value, null);

        if (!this.head) {
            this.head = newNode;
            return;
        }

        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    popFront() {}
    pushBack(value) {
        var newNode = new Node(value, null);
        var last = this.head;

        if (!this.head) {
            this.head = newNode;
            return;
        }

        while (!!last.next) {
            last = last.next;
        }

        last.next = newNode;
        this.length++;
        return;
    }

    search(value) {
        var curr = this.head;

        while (curr) {
            if (curr.val === value) return true;
            curr = curr.next;
        }

        return false;
    }
    popBack() {}
    front() {}
    back() {}
    insert(index, value) {}
    erase(index) {}
    valueNFromEnd() {}
    reverse() {}
    removeValue(value) {
        var temp = this.head,
            prev = null;

        if (temp !== null && temp.val === value) {
            this.head = this.head.next;
            return this.head;
        }

        while (tem && temp.val !== value) {
            prev = temp;
            temp = temp.next;
        }

        if (temp == null) return;

        prev.next = temp.next;
    }
}


export function LinkedList() {
    var Node = function(data) {
        this.data = data || null;
        this.next = null;
    }
    var head = null;
    var length = 0;

    this.append = append;
    this.removeAt = removeAt;
    this.insert = insert;
    this.print = print;
    this.indexOf = indexOf;
    this.getHead = getHead;
    this.size = size;
    this.isEmpty = isEmpty;
    this.remove = remove;
    this.dedup = dedup;

    function append(element) {
        var newNode = new Node(element);
        var current;

        if (head === null) {
            head = newNode;
        } else {
            current = head;

            while (current.next != null) {
                current = current.next;
            }

            current.next = newNode;
        }

        length++;
    }

    function removeAt(position) {
        if (position > -1 && position < length) {
            var current = head,
                prev,
                index = 0;
            if (position === 0) {
                head = current.next;
            } else {
                while (index++ < position) {
                    prev = current;
                    current = current.next;
                }
                prev.next = current.next;
            }
            length--;
            return current.data;
        } else {
            return null;
        }
    }

    function insert(position, data) {
        if (position >= 0 && position <= length) {
            var node = new Node(data),
                current = head,
                prev,
                index = 0;
            if (position === 0) {
                node.next = current;
                head = node;
            } else {
                while (index++ < position) {
                    prev = current;
                    current = current.next;
                }
                node.next = current;
                prev.next = node;
            }
            length++;
            return true;
        } else {
            return false;
        }
    }

    function print() {
        var arr = [];
        var current;

        if (head === null) {
            console.log("Empty");
        } else {
            current = head;
            while (current != null) {
                arr.push(current.data);
                current = current.next;
            }
        }

    }

    function indexOf(data) {
        var current = head,
            index = -1;
        while (current) {
            if (data === current.data) {
                return index;
            }
            index++;
            current = current.next;
        }

        return -1;
    }

    function remove(data) {
        var index = this.indexOf(data);
        return this.removeAt(index);
    }

    function isEmpty() {
        return length === 0;
    }

    function size() {
        return length;
    }

    function getHead() {
        return head;
    }


    function dedup() {
        var n = head;
        while (n != null) {
            var current = n;
            while (current.next != null) {
                if (current.next.data === n.data) {
                    current.next = current.next.next;
                } else {
                    current = current.next;
                }
            }
            n = n.next;
        }
    }
}