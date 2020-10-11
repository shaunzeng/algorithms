/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */

/*
 Input: n = 6, edges = [[0, 3], [1, 3], [2, 3], [4, 3], [5, 4]]

     0  1  2
      \ | /
        3
        |
        4
        |
        5 

Output: [3, 4]
*/

// track inDegree, keep deleting leaf nodes till there s only 1 or 2 left, that or those are the root node that has min height
var findMinHeightTrees = function(n, edges) {
    if (n == 1) return [0];

    // build graph
    let graph = Array.from(new Array(n), () => new Array()),
        inDegree = new Array(n).fill(0);

    edges.forEach((edge, i) => {
        graph[edge[0]].push(edge[1]);
        graph[edge[1]].push(edge[0]);

        inDegree[edge[0]]++;
        inDegree[edge[1]]++;
    });

    let ans = [],
        q = [];

    inDegree.forEach((node, i) => {
        if (node == 1) {
            q.push(i);
        }
    })

    // bfs
    while (q.length !== 0) {
        let size = q.length,
            list = [];

        while (size--) {
            let curr = q.shift(),
                neighbors = graph[curr];

            list.push(curr);
            inDegree[curr]--;

            neighbors.forEach((neighbor) => {
                inDegree[neighbor]--;

                if (inDegree[neighbor] == 1) {
                    q.push(neighbor);
                }
            })
        }
        ans = list;
    }

    return ans;
};