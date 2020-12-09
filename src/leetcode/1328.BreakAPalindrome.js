/**
 * @param {string} palindrome
 * @return {string}
 */
var breakPalindrome = function(s) {

    let n = s.length;
    if (n <= 1) return ''; // any one letter string has no answer, as they are always palindrome;

    for (let i = 0; i < n; i++) {
        let j = n - i - 1;

        if (j === i) continue; // to check if its an odd number palindrome, as changing the middle character does not make it NOT a palindrome;

        if (s[i] !== 'a') {
            // whenever a non 'a' letter appears, we change it to a, to make it lexicographcally smallest;
            s = s.replaceAt(i, 'a');
            return s;
        }
    }

    // if string has all a's we change the last one to b to make it the smallest;
    s = s.replaceAt(n - 1, 'b');
    return s;
};

String.prototype.replaceAt = function(index, character) {
    return this.substr(0, index) + character + this.substr(index + character.length);
}