/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {

    const mapping = [
        [1000, 'M'],
        [900, 'CM'],
        [500, 'D'],
        [400, 'CD'],
        [100, 'C'],
        [90, 'XC'],
        [50, 'L'],
        [40, 'XL'],
        [10, 'X'],
        [9, 'IX'],
        [5, 'V'],
        [4, 'IV'],
        [1, 'I']
    ];

    let ans = '';

    for (let i = 0; i < mapping.length && num > 0; i++) {
        const curr = mapping[i],
            value = curr[0],
            symbol = curr[1];

        while (value <= num) {
            num -= value;
            ans += symbol;
        }
    }

    return ans;

};