/**
 * @param {number} n
 * @param {number[][]} prerequisites
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var checkIfPrerequisite = function(n, prerequisites, queries) {

    //build graph, and inDegree array
    const { graph, inDegree } = buildGraph(n, prerequisites),
        //initialize a prerequisites set, the goal is to pass prerequisites down to the nexts
        preSet = {};

    const q = [];

    for (let i = 0; i < n; i++) {
        preSet[i] = new Set(); // init a prerequisite set for each course
        preSet[i].add(i); // add the course itself as prerequisite, so that the next courses will have it too

        if (inDegree[i] === 0) {
            q.push(i); // if a course has no prerequisite add to q to start bfs
        }
    }

    while (q.length) {

        const curr = q.shift(),
            neighbors = graph[curr],
            currPreSet = preSet[curr];


        for (let i = 0; i < neighbors.length; i++) {
            const neighbor = neighbors[i], // get neighbor
                neighborPreSet = preSet[neighbor];


            for (const course of currPreSet) {
                // add the parent prerequisites to its neighbor
                neighborPreSet.add(course);
            }

            // deDegree --, because we have counted one edge
            inDegree[neighbor]--;
            // if we have visited all edges, we push to the q
            if (inDegree[neighbor] === 0) {
                q.push(neighbor);
            }
        }
    }

    return queries.map(([u, v]) => preSet[v].has(u));
};

function buildGraph(n, prere) {

    const graph = {},
        inDegree = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        graph[i] = [];
    }

    prere.forEach(([u, v]) => {
        graph[u].push(v);
        inDegree[v]++;
    });

    return { graph, inDegree };
}