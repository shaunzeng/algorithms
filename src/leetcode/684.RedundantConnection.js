/**
 * @param {number[][]} edges
 * @return {number[]}
 */
/* cyrcle detection in undirected graph
    
check if current vertices of an edge can be reach in graph , before adding them to the graph.
if two vertices of an edge can be reach, then there s a cycle, return that edge
*/
var findRedundantConnection = function(edges) {

    // check whether an edge can be in a cyecle while building graph
    const graph = {};

    // build graph
    for (let i = 0; i < edges.length; i++) {
        const u = edges[i][0],
            v = edges[i][1];

        // check if vertices of an edge can be reached, meaning if u can reach v, that means there
        // is a cycle, return that edge;
        if (hasCycle(u, v, graph, new Set())) return edges[i];

        if (graph[u] === void 0) {
            graph[u] = [];
        }

        if (graph[v] === void 0) {
            graph[v] = [];
        }

        // if there s no cycle between the vertices, add them to the graph
        graph[u].push(v);
        graph[v].push(u);
    }

    return [];
};


function hasCycle(curr, target, graph, visited) {

    // stop condition, if target is reached, return true
    if (curr === target) return true;

    // add to visited, to void duplicate path
    visited.add(curr);

    // get neighbors of the vertice
    const neighbors = graph[curr];

    // if neighbor exist, dfs neighbors to see if any one returns true
    if (!!neighbors) {
        for (let i = 0; i < neighbors.length; i++) {
            const neighbor = neighbors[i];
            // ignore visited node to avoid duplcaite path;
            if (visited.has(neighbor)) continue;

            // once we find a true return it
            if (hasCycle(neighbor, target, graph, visited)) return true;
        }
    }

    // if not, return false, there s no cycle;
    return false;
}



/*
------------------------------------------------------------------------
*/





/**
 * @param {number[][]} edges
 * @return {number[]}
 */

// union find
var findRedundantConnection = function(edges) {

    const graph = buildGraph(edges), // build graph
        parents = [-1]; // init an parents array that tracks parents, we push -1 because 0 is not a valid node;

    for (let [node, neighbors] of Object.entries(graph)) {
        parents.push(-1); // set all initial parents for all node to -1, 
    };

    for (let i = 0; i < edges.length; i++) {
        const uParent = find(parents, edges[i][0]), // find u's parent
            vParent = find(parents, edges[i][1]); // find v's parent

        if (uParent === vParent) { // if u and v have same parents, it means that they r in the same group, has cycle;
            return edges[i];
        } else {
            union(parents, edges[i][0], edges[i][1]); // union the two groups
        }

    }

    return [];
};

function find(parents, target) {
    if (parents[target] === -1) {
        return target;
    }
    return find(parents, parents[target]);
}

function union(parents, u, v) {
    const uParent = find(parents, u),
        vParent = find(parents, v);
    parents[uParent] = vParent;
}

function buildGraph(edges) {
    const graph = {};
    edges.forEach(([u, v]) => {

        if (graph[u] === void 0) {
            graph[u] = [];
        }

        if (graph[v] === void 0) {
            graph[v] = [];
        }

        graph[u].push(v);
        graph[v].push(u);
    });

    return graph;
}