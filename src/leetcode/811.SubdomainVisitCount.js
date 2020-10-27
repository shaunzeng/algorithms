/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    if (!cpdomains || cpdomains.length == 0) return [];

    let dic = {};

    for (let i = 0; i < cpdomains.length; i++) {
        let splt = cpdomains[i].split(' '),
            count = parseInt(splt[0]),
            subDmSplt = splt[1].split('.');

        for (let j = 0; j < subDmSplt.length; j++) {
            let dm = subDmSplt.slice(j, subDmSplt.length).join('.');
            dic[dm] = dic[dm] == void 0 ? count : dic[dm] + count;
        }

    }

    return Object.keys(dic).map(k => dic[k] + ' ' + k);
};