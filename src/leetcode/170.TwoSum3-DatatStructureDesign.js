/**
 * Initialize your data structure here.
 */
var TwoSum = function() {
    this.dic = {};
};

/**
 * Add the number to an internal data structure.. 
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function(number) {
        this.dic[number] = this.dic[number] ? this.dic[number] + 1 : 1;
    }
    /**
     * Find if there exists any pair of numbers which sum is equal to the value. 
     * @param {number} value
     * @return {boolean}
     */
TwoSum.prototype.find = function(value) {
    return Object.keys(this.dic).some((k, idx) => {
        const parsedK = parseInt(k),
            remain = value - parsedK;

        if (!this.dic[remain]) return false;

        return (parsedK !== remain && this.dic[remain] >= 1) || (parsedK === remain && this.dic[remain] >= 2)
    })
};

/** 
 * Your TwoSum object will be instantiated and called as such:
 * var obj = new TwoSum()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */