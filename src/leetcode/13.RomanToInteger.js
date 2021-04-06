/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    if (!s) return 0;
    const map = {
        "I": 1,
        "IV": 4,
        "V": 5,
        "IX": 9,
        "X": 10,
        "XL": 40,
        "L": 50,
        "XC": 90,
        "C": 100,
        "CD": 400,
        "D": 500,
        "CM": 900,
        "M": 1000
    }
    let ans = 0,
        i = 0;
    while (i < s.length) {
        const curr = s[i],
            value = map[curr],
            next = s[i + 1] || null,
            nextValue = next ? map[next] : null;
        if (nextValue !== null && value >= nextValue) {
            ans = ans + value;
            i++;
        } else if (nextValue !== null && value < nextValue) {
            ans = ans + map[curr + next];
            i = i + 2;
        } else {
            ans = ans + value;
            i++;
        }
    }
    return ans;
};