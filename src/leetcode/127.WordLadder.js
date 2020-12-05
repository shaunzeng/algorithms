/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {

    const dic = wordList.reduce((acct, word) => {
        acct[word] = true;
        return acct;
    }, {}); // convert word list to a dictionary

    if (!dic[endWord]) return 0; // if end word is not in dictionary, means not possible


    let s = [],
        steps = 0;

    s.push(beginWord);

    while (s.length !== 0) {

        steps++; // increment steps count
        const size = s.length; // get size of current steps

        for (let i = 0; i < size; i++) {
            const curr = s.shift(), // get current word
                possibleNodes = getPossibleNodes(curr, dic); // find words that possbly can change to 


            if (possibleNodes.indexOf(endWord) !== -1) return steps + 1; // see if end word is inside the possible change, if yes, return the steps+1;
            s = [...s, ...possibleNodes]; // or add the possible words to queue

        }
    }

    return 0;
};

function getPossibleNodes(curr, dic) {
    let len = curr.length,
        collection = [];
    for (let i = 0; i < len; i++) {
        for (var j = 'a'.charCodeAt(0); j <= 'z'.charCodeAt(0); j++) {
            // check each character of the word, and change with other 25 characters;
            let copy = curr;
            copy = copy.replaceAt(i, String.fromCharCode(j));

            if (dic[copy]) {
                // when found one in dictionary, add to possible words to chganeg to 
                collection.push(copy);
                delete dic[copy] // delete that word in dictionary to avoid duplicates
            }

        }
    }

    return collection;
}

String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}