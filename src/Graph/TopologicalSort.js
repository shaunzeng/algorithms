function topSort(graph) {
    const s = [],
        visited = new Set();

    for (let [key, value] of Object.entries(graph)) {
        if (visited.has(key)) continue;

        topSortUtil(key, s, visited, graph);
    }

    return s;
}

function topSortUtil(v, s, visited, graph) {
    visited.add(v);

    const neighbors = graph[v];
    for (let i = 0; i < neighbors.length; i++) {
        const neighbor = neighbors[i];
        if (visited.has(neighbor)) continue;
        topSortUtil(v, s, visited, graph);
    }
    s.unshift(v);
}