/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */

/*  topological sort
Classic topological sort, but watch for scenario where there is a cycle.

*/
var findOrder = function(numCourses, prerequisites) {

    const graph = buildGraph(numCourses, prerequisites),
        visited = new Map(), // (undefined = unknown, 1 = visiting, 2 = visited)
        s = [];

    for (let [course, neighbors] of Object.entries(graph)) {
        // if any returns true, that means there s a cycle, return empty array
        if (dfs(course, s, visited, graph)) return [];
    };

    return s;
};

function dfs(course, s, visited, graph) {

    // if course is 1 in visited, that means it has been already visiting, there is a cyrcle
    if (visited.get(course) === 1) return true;

    // if course is 2 in visited, that means it has already visited, no need to visit again 
    if (visited.get(course) === 2) return false;

    visited.set(course, 1);

    const neighbors = graph[course];

    for (let i = 0; i < neighbors.length; i++) {
        if (dfs(neighbors[i], s, visited, graph)) return true;
    }

    // set visiting to visited
    visited.set(course, 2);

    // push 
    s.unshift(course);
    return false;
}


function buildGraph(num, arr) {
    let graph = {};

    for (let i = 0; i < num; i++) {
        graph[i] = [];
    }

    arr.forEach(edge => {
        let pre = edge[1],
            course = edge[0];
        graph[pre].push(course.toString());
    });

    return graph;
}