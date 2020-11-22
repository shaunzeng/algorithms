/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {

    //build graph 
    let graph = {};

    equations.forEach((e, i) => {
        let a = e[0],
            b = e[1];

        if (!graph[a]) {
            graph[a] = [];
        }

        if (!graph[b]) {
            graph[b] = [];
        }
        graph[a].push([b, values[i]]);
        graph[b].push([a, 1 / values[i]]);
    });


    const dfs = (curr, dst, visited) => {
        if (curr == dst) return 1.0;
        visited[curr] = true;

        if (!graph[curr]) return -1.0;

        let neighbors = graph[curr];
        for (let i = 0; i < neighbors.length; i++) {
            let neighbor = neighbors[i][0],
                weight = neighbors[i][1];

            if (visited[neighbor]) continue;

            let d = dfs(neighbor, dst, visited);
            if (d > 0) return d * weight;
        }
        return -1.0;
    }

    let ans = [];
    queries.forEach((query, i) => {
        if (!graph[query[0]] || !graph[query[1]]) {
            ans.push(-1);
        } else {
            ans.push(dfs(query[0], query[1], {}));
        }
    })
    return ans;
};