/**
 * @param {string} S
 * @return {string}
 */
var reorganizeString = function(S) {
    if (!S) return S;

    // build a charater -> count mapping
    let dic = S.split('').reduce((m, item) => {
        m[item] = m[item] + 1 || 1;
        return m;
    }, {});

    // build a [character, count] pairs array
    let sorted = Object.keys(dic).map((k) => {
        return [k, dic[k]];
    });

    // sort the array by count in descending order
    //(character that appears most times is at the front of the array)
    sorted.sort((a, b) => b[1] - a[1]);

    // answer holder
    let ans = '';

    // loop while the sorted array still has items
    while (sorted.length > 0) {
        // ge the first item;
        let curr = sorted.shift();
        // if answer is empty or , if the last character is NOT the same as curr char
        // append the character to the end of answer string,
        if (ans === '' || ans[ans.length - 1] !== curr[0]) {
            ans += curr[0];
            // decrement count as we have used that char
            curr[1]--;
            // if the count is still greater than 1,
            // meaning we still have this char left
            // add it back to sorted array
            if (curr[1] > 0) {
                sorted.unshift(curr);
            }

            // if current character is the same as last character
            // we look at the next char with second bigger count
        } else {

            let next = sorted.shift();
            // if next bigger char does not exist anymore,
            // that means that there s no other characters to use
            // but we ll have to put two same character next to each other
            // then its a '' to the question
            if (next === void 0) {
                return '';
            }

            // or append the next char to the end of the answer string
            ans += next[0];
            // decrement its count
            next[1]--;
            // check if there is still char left
            if (next[1] > 0) {
                // if there is , add it back to the sorted array
                sorted.unshift(next);
            }
            // we never use current char in this scenario
            // so add it back to sorted aray;
            sorted.unshift(curr);
        }
        // sort again, to make sure we always use the char that appears most time first
        sorted.sort((a, b) => b[1] - a[1]);
    }
    // return answer
    return ans;

};