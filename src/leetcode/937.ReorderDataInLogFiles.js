var reorderLogFiles = function(logs) {
    if (!logs || logs.length === 0) return logs;
    // sort array
    logs.sort((a, b) => {
        // split a,b into 2 parts: header, main body
        let split1 = splitStr(a),
            split2 = splitStr(b),
            // check both if its a digit or non digit 
            isDigit1 = parseInt(split1[1][0]) >= 0 ? true : false,
            isDigit2 = parseInt(split2[1][0]) >= 0 ? true : false,
            // track value when both are non digit
            value = null;
        // if both are non-digits, compare lexicographcally
        if (!isDigit1 && !isDigit2) {
            // compare lexicographcally
            value = split1[1].localeCompare(split2[1]);
            // if they are same lexicographhcaly, 
            // compare their header
            if (value === 0) {
                // compare "log1", etc
                return split1[0].localeCompare(split2[0]);
            }
            // if not the same, return value
            return value;
        }
        // if one of them is a digit, move digit to last, if both are digits there s no change
        return isDigit1 ? (isDigit2 ? 0 : 1) : -1;
    });
    return logs;
};

function splitStr(s) {
    let i = 0;
    while (i < s.length) {
        if (s[i] === ' ') {
            break;
        }

        i++;
    }
    return [s.substring(0, i), s.substring(i + 1, s.length)]
}