/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    // deep copy array
    this.nums = [...nums];

    // create prefix sum
    for (let i = 1; i < nums.length; i++) {
        this.nums[i] += this.nums[i - 1];
    };
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    // if i is 0, return num at j;
    if (i == 0) return this.nums[j];

    // if not return num at j minus num at i-1
    return this.nums[j] - this.nums[i - 1];
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */