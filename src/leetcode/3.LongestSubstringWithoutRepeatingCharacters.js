var lengthOfLongestSubstring = function(s) {
    if (s.length === 0) return 0;
    let map = {}, // tracks last index of a character
        max = 0, // tracks max lengtn of a non repeating sub string
        i = 0, // right end of sliding window
        j = 0; // left end of sliding window
    // loop through the string
    while (i < s.length) {
        let curr = s[i]; // get current character
        // if current character has appeared before, move j
        if (map[curr] !== void 0) {
            // we move j to right next of last index curr has appeard at
            // but sometime current character's last index is even before j index
            // it ll be meaningless to move j backwards
            // so we use Math.max to make sure j doesnt go backwards
            j = Math.max(j, map[curr] + 1);
        }
        map[curr] = i; // update chracter's last index
        max = Math.max(max, i - j + 1); // update max length
        i++; // increment i
    }
    return max; // return max
};