/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {

    // get the bigger length
    const w = Math.max(num1.length, num2.length);

    // pad shorter one with 0, to make them have the same length
    num1 = num1.padStart(w, '0');
    num2 = num2.padStart(w, '0');

    let c = 0; // the carry;
    let res = ''; // the output;

    // loop from the end, and do the math.
    for (let i = num1.length - 1; i >= 0; i--) {
        // total at the current digit
        const curr = parseInt(num1[i], 10) + parseInt(num2[i], 10) + c;

        if (i !== 0) {
            const dig = curr % 10; // get the number on the digit
            c = Math.floor(curr / 10) // check if there is a carryl
            res = dig + res; // convert dig to string by adding a string;
        } else {
            // when its the first digit, just add to the front of the string;
            res = curr + res;
        }
    }

    return res;
};