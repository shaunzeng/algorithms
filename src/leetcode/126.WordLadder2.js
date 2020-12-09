/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {

    const ans = [],
        words = wordList.reduce((acct, item) => { acct[item] = true; return acct; }, {});

    if (words[endWord] === void 0) return [];

    const distance = bfs(beginWord, endWord, words);

    dfs(beginWord, words, [beginWord], ans, endWord, distance);
    return ans;
};

function dfs(word, words, path, ans, endWord, distance) {

    if (word === endWord) {
        ans.push([...path]);
        return;
    }


    const nextWords = getNextWords(word, words);

    for (let i = 0; i < nextWords.length; i++) {
        let w = nextWords[i];

        if (distance[w] !== void 0 && distance[w] === distance[word] + 1) {
            path.push(w);
            helper(w, words, path, ans, endWord, distance);
            path.pop();
        }
    }
}


function getNextWords(word, words) {
    const ans = [],
        alph = 'abcdefghijklmnopqrstuvwxyz';

    for (let i = 0; i < word.length; i++) {
        for (let j = 0; j < alph.length; j++) {
            const newWord = replaceAt(word, i, alph[j]);

            if (words[newWord] && newWord !== word) {
                ans.push(newWord);
            }
        }
    }

    return ans;
}


function replaceAt(word, i, replacement) {
    return word.slice(0, i) + replacement + word.slice(i + 1, word.length);
}


function bfs(b, e, words) {

    let q = [],
        steps = 0,
        distance = {};

    q.push(b);
    distance[b] = 1;

    while (q.length > 0) {

        steps++;

        let size = q.length;

        for (let i = 0; i < size; i++) {
            let curr = q.shift(),
                nextWords = getNextWords(curr, words);

            nextWords.forEach(w => {
                if (distance[w] === void 0) {
                    distance[w] = steps + 1;
                    q.push(w);
                }
            })
        }
    }

    return distance;
}