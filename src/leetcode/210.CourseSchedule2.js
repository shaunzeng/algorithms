/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */

// cyrcle detection in directed graph,

// three sets: graph, visited, visiting

// if visiting has duplicate , there s a cycle, return [];
// remove visiting node once it reaches the end, and add end node to visited in post traversal, while adding the end
// node to the ans array / tracking the path;
var findOrder = function(numCourses, prerequisites) {
    if (numCourses <= 1) return !!prerequisites[0] ? prerequisites[0].reverse() : [0];

    const graph = buildGraph(numCourses, prerequisites),
        visiting = new Set(),
        visited = new Set(),
        ans = [];

    for (let [course, neighbors] of Object.entries(graph)) {
        if (hasCycle(course, graph, visiting, visited, ans)) return [];
    }

    return ans;
};


function hasCycle(course, graph, visiting, visited, ans) {

    if (visiting.has(course)) return true;
    if (visited.has(course)) return false;

    visiting.add(course);

    const neighbors = graph[course];

    for (let i = 0; i < neighbors.length; i++) {
        if (visited.has(neighbors[i])) continue;
        if (hasCycle(neighbors[i], graph, visiting, visited, ans)) return true;
    }

    visiting.delete(course);
    visited.add(course);
    ans.unshift(course);
    return false;
}


function buildGraph(num, arr) {
    const graph = {};

    for (let i = 0; i < num; i++) {
        graph[i] = [];
    }

    arr.forEach(edge => {
        graph[edge[1]].push(edge[0] + ''); // convert to string
    });

    return graph;
}