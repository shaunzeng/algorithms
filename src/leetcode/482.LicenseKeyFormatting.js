var licenseKeyFormatting = function(S, K) {
    if (!S) return '';
    let str = S.split('-').join('').toUpperCase();
    let i = str.length - 1,
        res = '';
    while (i >= 0) {
        const tmp = str.substring(Math.max(0, i - K + 1), i + 1);
        res = '-' + tmp + res;
        i = i - K;
    }
    if (res.startsWith('-')) {
        res = res.substring(1, res.length);
    }
    return res;
};