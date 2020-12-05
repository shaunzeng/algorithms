/**
 * Initialize your data structure here.
 */
var Logger = function() {
    this.dic = {};
};

/**
 * Returns true if the message should be printed in the given timestamp, otherwise returns false.
        If this method returns false, the message will not be printed.
        The timestamp is in seconds granularity. 
 * @param {number} timestamp 
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function(timestamp, message) {
    if (this.dic[message] === void 0) {
        this.dic[message] = timestamp;
        return true;
    } else {
        const oldTime = this.dic[message];

        if (timestamp - oldTime >= 10) {
            this.dic[message] = timestamp;
            return true;
        } else {
            return false;
        }
    }
};

/** 
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */