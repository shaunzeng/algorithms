/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
    if (!candies || candies.length == 0) return 0;

    let dic = {};
    for (let i = 0; i < candies.length; i++) {
        dic[candies[i]] = dic[candies[i]] == void 0 ? 1 : dic[candies[i]] + 1;
    }

    let needed = candies.length / 2,
        types = Object.keys(dic).length;

    return types > needed ? needed : types;
};