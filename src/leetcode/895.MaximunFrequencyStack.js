var FreqStack = function() {
    this.val_freq = {}; // a val -> frequency pair
    this.freq_val_stack = {}; // a frequency-> stack pair
};

/** 
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function(val) {
    // when pushing val
    // incremenet frequency for that val;
    this.val_freq[val] = this.val_freq[val] + 1 || 1;
    // get the frequency of current value
    const freq = this.val_freq[val];
    // add val to the frequency stack
    this.freq_val_stack[freq] = this.freq_val_stack[freq] || [];
    this.freq_val_stack[freq].push(val);
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function() {
    // get frequency
    const freq = Object.keys(this.freq_val_stack).length;
    // pop the latest value in that frequency,
    // and it is our answer;
    const n = this.freq_val_stack[freq].pop();
    // decrement frequency for that value in value frequency mapping
    this.val_freq[n] = this.val_freq[n] - 1;
    // if current frequency has no more value, delete that frequency
    if (this.freq_val_stack[freq].length === 0) {
        delete this.freq_val_stack[freq];
    }

    return n;

};