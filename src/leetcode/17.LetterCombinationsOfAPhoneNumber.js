/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (!digits || digits.length === 0) return [];

    const result = [],
        mapping = {
            2: 'abc',
            3: 'def',
            4: 'ghi',
            5: 'jkl',
            6: 'mno',
            7: 'pqrs',
            8: 'tuv',
            9: 'wxyz'
        };

    letterCombinationRecursive(result, digits, mapping, '', 0);
    return result;

};


function letterCombinationRecursive(result, digits, mapping, curr, idx) {
    if (curr.length === digits.length) {
        result.push(curr);
        return;
    }

    const letters = mapping[digits[idx]];
    for (let i = 0; i < letters.length; i++) {
        letterCombinationRecursive(result, digits, mapping, curr + letters[i], idx + 1);
    }
}