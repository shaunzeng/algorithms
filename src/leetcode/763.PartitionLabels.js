var partitionLabels = function(S) {
    const partitionLengths = [],
        lastIndexOfChar = {};
    for (let i = 0; i < S.length; i++) {
        // tracks last index of each character
        lastIndexOfChar[S[i]] = i;
    }
    let i = 0;
    while (i < S.length) {
        // get the last index of current character
        let end = lastIndexOfChar[S[i]];
        // start a j pointer to go over characters till 
        //the last index of current characters, to see if all are before it
        let j = i;

        while (j < end) {
            // if any character's last index is greater than current character, update the end
            end = Math.max(end, lastIndexOfChar[S[j]]);
            j++;
        }
        // once it gets out of the while j loop,
        // we have found the index, before which the characters only appears
        // j - i + 1 is the actually length between i and j
        partitionLengths.push(j - i + 1);
        // update i to next of j;
        i = j + 1;
    }
    return partitionLengths;
};