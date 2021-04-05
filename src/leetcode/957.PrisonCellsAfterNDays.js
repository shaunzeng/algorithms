/**
 * @param {number[]} cells
 * @param {number} n
 * @return {number[]}
 */
var prisonAfterNDays = function(cells, n) {

    const states = new Set(); // tracks states of cells for each day

    let hasCycle = false, // flag that tracks if there is a cycle
        days = 0;

    for (let i = 0; i < n; i++) {
        const next = getNext(cells), // get cells state of next day
            str = next.toString();

        if (!states.has(str)) { // check if this states happened before
            states.add(str); // if not , add to states
            days++; // imcrement days to track how many days till it repeat
            cells = next; // assign new cells to the cells variable
        } else {
            hasCycle = true; // if it happened before, flag it, and break the for loop
            break;
        }
    }

    if (hasCycle) {
        n = n % days; // if it repeats, only calculate days that are not repeat, by getting % of n

        for (let i = 0; i < n; i++) {
            cells = getNext(cells); // calculate those cell states
        }
    }
    return cells;
};



function getNext(cells) {
    const next = new Array(cells.length);

    for (let i = 0; i < cells.length; i++) {
        if (i === 0 || i === cells.length - 1) {
            next[i] = 0; // follow rules, start and end point are 0
        } else {
            next[i] = cells[i - 1] === cells[i + 1] ? 1 : 0; // follow the rules
        }
    }

    return next;
}