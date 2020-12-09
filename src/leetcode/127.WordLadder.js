/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */

/* solution (DFS)
1. add start word in a queue
2. pop last in the queue, and find words in the wordList that can be made by changing one letter
3. found all words and add to the queue, one step means one search for all the words found
4, repeat 2 and 3 till you find end word, while u checking words in the wordlist, delete the one that was found and added to the queue, to avoid going backwards
5, if u run out of words in the list, return 0.

*/
var ladderLength = function(beginWord, endWord, wordList) {

    const words = new Set(wordList);

    if (!words.has(endWord)) return 0; // if end word is not in dictionary, means not possible


    return bfs(beginWord, endWord, words);
};

function bfs(begin, end, words) {
    let s = [],
        steps = 0;

    s.push(begin);

    while (s.length !== 0) {

        steps++; // increment steps count
        const size = s.length; // get size of current steps

        for (let i = 0; i < size; i++) {
            const curr = s.shift(), // get current word
                possibleNodes = getPossibleNodes(curr, words); // find words that possbly can change to 


            if (possibleNodes.findIndex(end) !== -1) return steps + 1; // see if end word is inside the possible change, if yes, return the steps+1;
            s = [...s, ...possibleNodes]; // or add the possible words to queue

        }
    }

    return 0;
}

function getPossibleNodes(curr, words) {
    let len = curr.length,
        collection = [];
    for (let i = 0; i < len; i++) {
        for (var j = 'a'.charCodeAt(0); j <= 'z'.charCodeAt(0); j++) {
            // check each character of the word, and change with other 25 characters;
            let newWord = replaceAt(curr, i, String.fromCharCode(j));

            if (words.has(newWord)) {
                // when found one in dictionary, add to possible words to chganeg to 
                collection.push(copy);
                delete dic[copy] // delete that word in dictionary to avoid duplicates
            }

        }
    }

    return collection;
}

function replaceAt(word, i, replacement) {
    return word.substring(0, i) + replacement + word.substr(i + 1, word.length);
}