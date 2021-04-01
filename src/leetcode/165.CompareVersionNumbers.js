/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {

    const split1 = version1.split('.'), // split versions by .
        split2 = version2.split('.');

    // loop thru very piece of split, len is the longer one
    for (let i = 0; i < Math.max(split1.length, split2.length); i++) {

        const num1 = i < split1.length ? parseInt(split1[i]) : 0, // if current digit is within its length, assign with the Int
            num2 = i < split2.length ? parseInt(split2[i]) : 0; // if current digit is out of length, assign 0

        if (num1 > num2) { // if bigger return 1
            return 1;
        } else if (num1 < num2) { // if smaller return -1
            return -1;
        }

        // if same, continue, till end of length
    }

    // if all the same, return 0
    return 0;
};