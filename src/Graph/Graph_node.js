export class Node {
    value;
    neighbors = [];
    constructor(value, neighbors) {
        this.value = value;
        this.neighbors = neighbors ? neighbors : [];
    }
}