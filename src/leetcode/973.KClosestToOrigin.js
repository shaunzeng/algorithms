var kClosest = function(points, K) {
    if (!points || points.length < 2) return points;
    return mergeSort(points).slice(0, K);
};

function mergeSort(arr) {
    if (arr.length == 1) return arr;
    var mid = Math.floor(arr.length / 2),
        left = arr.slice(0, mid),
        right = arr.slice(mid, arr.length);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(a, b) {
    var ans = [];
    while (a.length !== 0 && b.length !== 0) {
        ans.push(distance(a[0][0], a[0][1]) < distance(b[0][0], b[0][1]) ? a.shift() : b.shift());
    }
    while (a.length !== 0) {
        ans.push(a.shift());
    }
    while (b.length !== 0) {
        ans.push(b.shift());
    }
    return ans;
}

function distance(a, b) {
    return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
}