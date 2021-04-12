/**
 * @param {string} s
 * @return {number}
 */
// stack
var calculate = function(s) {
    if (!s) return 0;

    let i = 0, // interator
        stack = [], // stack that tracks numbers
        sign = '+', // tracks sign, start with a default + sign
        num = 0; // tracks num

    while (i < s.length) {

        // if its an empty space, skip it. increment i
        if (s[i] === ' ') {
            i++;
            continue;
        }

        // if its a digit, find the full number
        // by incrementing i in a while loop
        // till i index is not a number.
        if (parseInt(s[i]) >= 0) {
            while (i < s.length && parseInt(s[i]) >= 0) {
                // for each digit, multiply by 10 and add current number
                num = num * 10 + parseInt(s[i]);
                i++;
            }
        }

        // once out of the number while loop, check if its a sign
        // i === s.length-1, is to be able to calculate the last number which does not have any sign after
        // meaning at the end index, the preivous sign and num are not calculated yet;
        if (isNaN(parseInt(s[i])) || i == s.length - 1) {
            // check most previous sign
            if (sign === '+') {
                stack.push(num); // if its +, add num to stack
            } else if (sign === '-') {
                stack.push(-1 * num); // if previous sign is -, add -num to stack
            } else if (sign === '*') {
                stack.push(stack.pop() * num); // if preivous sign is *, do the math and add result to stack
            } else if (sign === '/') {
                stack.push(parseInt(stack.pop() / num)); // if previous sign is -, do the math add result to stack
            }

            // update previous sign with current sign
            sign = s[i];
            // reset number
            num = 0;
            // increment interator
            i++;

        }
    }

    // return the sum of the stack;
    return stack.reduce((t, n) => t += n, 0);
};