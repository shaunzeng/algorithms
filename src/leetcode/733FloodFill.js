var floodFill = function(image, sr, sc, newColor) {
    if (image[sr][sc] === newColor) return image;
    flood(image, sr, sc, image.length, image[0].length, image[sr][sc], newColor);
    return image;
};

function flood(image, x, y, n, m, orgColor, newColor) {
    // check if out of boundaries
    if (x < 0 || x >= n || y < 0 || y >= m) return;
    // if a spot is not in original color, stop recursion;
    if (image[x][y] !== orgColor) return;
    // change current spot to the newColor
    image[x][y] = newColor;
    // do it for the neighbors recursively
    flood(image, x + 1, y, n, m, orgColor, newColor);
    flood(image, x - 1, y, n, m, orgColor, newColor);
    flood(image, x, y + 1, n, m, orgColor, newColor);
    flood(image, x, y - 1, n, m, orgColor, newColor);
}