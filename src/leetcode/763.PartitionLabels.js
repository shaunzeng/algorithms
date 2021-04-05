var partitionLabels = function(S) {

    const partitionLengths = [],
        lastIndexOfChar = {};

    for (let i = 0; i < S.length; i++) {
        lastIndexOfChar[S[i]] = i; // tracks last index of each character
    }


    let i = 0;

    while (i < S.length) {
        let end = lastIndexOfChar[S[i]], // get the last index of current character
            j = i; // start a j pointer to go over characters till the last index of current characters, to see if all are before it

        while (j < end) {
            end = Math.max(end, lastIndexOfChar[S[j]]); // if any character's last index is greater than current character, update the end
            j++;
        }

        // once it gets out of the while j loop,
        // we have found the index, before which the characters only appears
        // j - i + 1 is the actually length between i and j
        partitionLengths.push(j - i + 1);

        i = j + 1; // update i to next of j;
    }

    return partitionLengths;

};