/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

// cycle detection with directed graph
// three sets : graph, visiting, visited

// remove visiting once you find the end node, and add end node to visited;
// while visiting nodes, ignore the ones that are in visited;
var canFinish = function(numCourses, prerequisites) {

    const graph = buildGraph(numCourses, prerequisites),
        visiting = new Set(),
        visited = new Set();


    for (let [course, neighbors] of Object.entries(graph)) {
        if (!visited.has(course) && hasCycle(course, graph, visiting, visited)) {
            return false;
        }
    }

    return true;
};


function hasCycle(course, graph, visiting, visited) {

    if (visiting.has(course)) return true;

    visiting.add(course);
    const neighbors = graph[course];
    for (let i = 0; i < neighbors.length; i++) {
        if (visited.has(neighbors[i])) continue;
        if (hasCycle(neighbors[i], graph, visiting, visited)) return true;
    }

    visiting.delete(course);
    visited.add(course);
    return false;
}


function buildGraph(n, prere) {
    const graph = {};
    for (let i = 0; i < n; i++) {
        graph[i] = [];
    }

    prere.forEach(([u, v]) => {
        graph[u].push(v);
    });

    return graph;
}