/**
 * @param {number[]} cells
 * @param {number} n
 * @return {number[]}
 */
var prisonAfterNDays = function(cells, n) {
    // tracks states of cells for each day
    const states = new Set();
    // flag that tracks if there is a cycle
    let hasCycle = false,
        days = 0;
    for (let i = 0; i < n; i++) {
        // get cells state of next day
        const next = getNext(cells),
            str = next.toString();
        // check if this states happened before
        if (!states.has(str)) {
            // if not , add to states
            states.add(str);
            // imcrement days to track how many days till it repeat
            days++;
            // assign new cells to the cells variable
            cells = next;
        } else {
            // if it happened before, flag it, and break the for loop
            hasCycle = true;
            break;
        }
    }
    if (hasCycle) {
        // if it repeats, only calculate days that are not repeat, by getting % of n
        n = n % days;
        for (let i = 0; i < n; i++) {
            // calculate those cell states
            cells = getNext(cells);
        }
    }
    return cells;
};

function getNext(cells) {
    const next = new Array(cells.length);
    for (let i = 0; i < cells.length; i++) {
        if (i === 0 || i === cells.length - 1) {
            // follow rules, start and end point are 0
            next[i] = 0;
        } else {
            // follow the rules
            next[i] = cells[i - 1] === cells[i + 1] ? 1 : 0;
        }
    }
    return next;
}