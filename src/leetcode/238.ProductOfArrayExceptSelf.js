/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    if (!nums || nums.length === 0) return 0;

    // count how many zeros in the array
    const zeroCount = nums.reduce((count, n) => count = n === 0 ? count + 1 : count, 0)
        // if there s more than one zero, all products are zero
    if (zeroCount >= 2) {
        return nums.map(n => 0);
    }

    // if there s only one zero, every one's product is zero except the zero
    if (zeroCount === 1) {
        const product = nums.reduce((t, n) => t = n !== 0 ? t * n : t, 1);
        return nums.map(itm => itm !== 0 ? 0 : product)
    }
    // if there s no zero, every product is total product/current
    const product = nums.reduce((t, itm) => t * itm, 1);
    return nums.map(n => product / n);
};