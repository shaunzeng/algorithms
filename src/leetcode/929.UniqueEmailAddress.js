/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    if (!emails || emails.length === 0) return 0;

    const mapping = emails.reduce((m, item) => {
        m[processEmail(item)] = true;
        return m;
    }, {});

    return Object.keys(mapping).length;
};


function processEmail(s) {
    let i = 0,
        j = i;

    while (i < s.length) {

        if (s[i] === '.') {
            s = s.substring(0, i) + s.substring(i + 1, s.length);
            continue;
        }

        if (s[i] === '+') {
            j = i;
            while (j < s.length) {
                if (s[j] !== '@') {
                    j++;
                } else {
                    break;
                }
            }
            s = s.substring(0, i) + s.substring(j, s.length);
            break;
        }

        if (s[i] === '@') {
            break;
        }
        i++;
    }
    return s;
}