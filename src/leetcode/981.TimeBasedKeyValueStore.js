/**
 * Initialize your data structure here.
 */
var TimeMap = function() {
    this.dic = new Map();
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {

    if (!this.dic.has(key)) {
        this.dic.set(key, new Map());
    }

    this.dic.get(key).set(timestamp, value);
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    if (!this.dic.has(key)) return "";

    const currMap = this.dic.get(key);
    const timestampArr = Array.from(currMap.keys());

    for (let i = timestampArr.length - 1; i >= 0; i--) {
        if (timestampArr[i] <= timestamp) {
            return currMap.get(timestampArr[i])
        }
    }
    return "";
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */