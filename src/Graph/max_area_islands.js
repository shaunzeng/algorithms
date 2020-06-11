var maxAreaOfIsland = function(grid) {
    if (!grid || grid.length == 0 || grid[0].length == 0) return 0;

    let rows = grid.length,
        cols = grid[0].length,
        max = 0;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] == 1) {
                let area = getArea(grid, i, j, rows, cols);
                max = Math.max(max, area);
                console.log('got a max : ', max);
            }
        }
    }

    return max;
};


function getArea(grid, i, j, rows, cols) {


    if (i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] == 0 || grid[i][j] == -1) return 0;

    grid[i][j] = -1;


    let left = getArea(grid, i, j - 1, rows, cols);
    let right = getArea(grid, i, j + 1, rows, cols);
    let up = getArea(grid, i - 1, j, rows, cols);
    let down = getArea(grid, i + 1, j, rows, cols);


    return left + right + up + down + 1;
}