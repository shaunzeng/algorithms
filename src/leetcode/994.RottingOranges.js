/**
 * @param {number[][]} grid
 * @return {number}
 */
// bfs
var orangesRotting = function(grid) {

    if (!grid || grid.length === 0) return 0;

    let n = grid.length,
        m = grid[0].length,
        rotten = new Set(), // the set of rotten
        fresh = new Set(), // the set of fresh
        dir = new Set([
            [0, 1],
            [0, -1],
            [1, 0],
            [-1, 0]
        ]), // 4 directions
        minutes = 0; // minutes

    // loop thru the grid, store rotten and fresh in their sets
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] === 1) {
                fresh.add('' + i + j);
            } else if (grid[i][j] === 2) {
                rotten.add('' + i + j);
            }
        }
    }

    // while there s still fresh oranges
    while (fresh.size > 0) {
        // create a new set that holds newly infected oranges
        let infected = new Set();

        // loop through all rotten oranges to infect adjacent ones
        for (let r of rotten) {
            // get current position
            let i = parseInt(r[0]),
                j = parseInt(r[1]);
            //check 4 directions
            for (let d of dir) {

                let newI = i + d[0],
                    newJ = j + d[1];
                // if a neighbor is fresh, remove it from fresh
                // add it to the newly infected set
                if (fresh.has('' + newI + newJ)) {
                    fresh.delete('' + newI + newJ);
                    infected.add('' + newI + newJ);
                }
            }
        }

        // if the newly infected is empty
        // it means that no more oranges can be infected 
        // while fresh size is still greater than 0,
        // which also meaning that there are still uninfected oranges
        // then we return -1, cuz we cannot infect the entire grid
        if (infected.size === 0) return -1;

        // if we do have newly infected oranges,
        // we asign it to the rotten, for the next cycle of infection
        rotten = infected;

        // increment minutes, as this is only one step
        minutes++;
    }
    //return minutes
    return minutes;
};