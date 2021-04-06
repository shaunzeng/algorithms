var reorderLogFiles = function(logs) {
    if (!logs || logs.length === 0) return logs;
    // sort array
    logs.sort((a, b) => {
        // split a,b into 2 parts
        let split1 = a.split(' ', 2),
            split2 = b.split(' ', 2),
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
                return !split1[0].localeCompare(split2[0]);
            }
            // if not the same, return value
            return value;
        }
        // if one of them is a digit, move digit to last
        return isDigit1 ? (isDigit2 ? 0 : 1) : -1;
    });
    return logs;
};