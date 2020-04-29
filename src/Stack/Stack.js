function Stack() {
    var self = this;
    self.data = [];
    self.push = push;
    self.pop = pop;
    self.peek = peek;
    self.size = size;

    function push(val) {
        self.data.push(val);
    }

    function pop() {
        return self.data.pop();
    }

    function peek() {
        return self.data[self.data.length - 1];
    }

    function size() {
        return self.data.length;
    }
}