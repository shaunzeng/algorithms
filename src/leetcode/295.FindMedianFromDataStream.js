/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
    this.list = [];
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {

    if (this.list.length === 0) {
        this.list.push(num);
        return;
    }

    if (this.list.length === 1) {
        if (num > this.list[0]) {
            this.list.push(num);
        } else {
            this.list.unshift(num);
        }

        return;
    }

    if (this.list.length >= 2) {

        let lo = 0,
            hi = this.list.length - 1;
        if (num >= this.list[hi]) {
            this.list.push(num);
        } else if (num <= this.list[0]) {
            this.list.unshift(num);
        } else {

            while (lo < hi) {
                if (this.list[lo] < num) {
                    lo++;
                } else if (this.list[hi] > num) {
                    hi--;
                } else {
                    break;
                }
            }
            this.list.splice(hi, 0, num);
        }
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {

    if (this.list.length == 1) {
        return this.list[0];
    }

    if (this.list.length == 2) {
        return (this.list[0] + this.list[1]) / 2;
    }

    if (this.list.length > 2) {

        const idx = Math.trunc((this.list.length - 1) / 2);

        if (this.list.length % 2 === 0) {

            return (this.list[idx] + this.list[idx + 1]) / 2;
        } else {

            return this.list[idx]
        }
    }

};