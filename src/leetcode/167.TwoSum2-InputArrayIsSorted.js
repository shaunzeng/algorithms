/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let i = numbers.length - 1,
        j = 0,
        ans = [];
    while (i >= 0) {
        if (numbers[i] <= target) {
            j = 0;
            while (j < i) {
                if (numbers[j] + numbers[i] === target) {
                    break;
                }
            };
            if (numbers[j] + numbers[i] === target) {
                ans = [j + 1, i + 1];
                break;
            }
        };
        i--;
    }
    return ans;
};