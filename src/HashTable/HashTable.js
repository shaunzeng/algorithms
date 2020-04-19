export function HashTable() {
    this.table = new Array(137);
    this.hashing = betterHash;
    this.showDistro = showDistro;
    this.put = put;
    this.get = get;

    function simpleHash(data) {
        var total = 0;
        for (var i = 0; i < data.length; i++) {
            total += data.charCodeAt(i);
        }
        return total % this.table.length;
    }

    function betterHash(str) {
        const H = 37;
        var total = 0;
        for (var i = 0; i < str.length; i++) {
            total += H * total + str.charCodeAt(i);
        }
        total = total % this.table.length;
        if (total < 0) {
            total += this.table.length - 1;
        }
        return parseInt(total);
    }

    function put(data) {
        var pos = this.hashing(data);
        this.table[pos] = data;
    }

    function showDistro() {
        var n = 0,
            len = this.table.length;
        for (var i = 0; i < len; i++) {
            if (this.table[i] != undefined) {
                console.log(i + ' : ' + this.table[i]);
            }
        }
    }

    function get(key) {
        return this.table[this.hashing(key)];
    }


    function getRandomInt(min, max) {
        return Math.floor(Math.randome() * (max - min + 1)) + min;
    }
}