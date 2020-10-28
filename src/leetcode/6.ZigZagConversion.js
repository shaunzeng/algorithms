/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (!s || numRows == 1 || numRows >= s.length) return s;

    let res = [];
    for (let i = 0; i < numRows; i++) {
        res.push([]);
    }

    let row = 0,
        delta = -1;

    for (let i = 0; i < s.length; i++) {
        res[row].push(s[i]);

        if (row == 0 || row == numRows - 1) {
            delta = delta * -1;
        }

        row += delta;
    }

    let f = '';

    for (let i = 0; i < res.length; i++) {
        f += res[i].join('');
    }

    return f;

};