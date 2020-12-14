/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {

    let bulls = 0,
        cows = 0;

    for (let i = 0; i < secret.length; i++) {
        if (secret[i] === guess[i]) {
            bulls++;
        }
    }

    let dic = {};

    for (let i = 0; i < secret.length; i++) {
        dic[secret[i]] = dic[secret[i]] === void 0 ? 1 : dic[secret[i]] + 1;
    }

    for (let i = 0; i < guess.length; i++) {

        if (dic[guess[i]] !== void 0) {
            cows++;
            dic[guess[i]]--;

            if (dic[guess[i]] === 0) {
                delete dic[guess[i]];
            }
        }
    }

    return bulls + 'A' + (cows - bulls) + 'B'

};