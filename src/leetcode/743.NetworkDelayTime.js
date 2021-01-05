/**
 * @param {number[][]} times
 * @param {number} N
 * @param {number} K
 * @return {number}
 */

// bfs + a distance map

// distance map tracks the distance(weight) from the source node to each node, by default , all is +Infinity
// we calculate distance for each node, by summing node weight and its parent weight, but we only update distance map
// when the newly calculated distance is less;

// like how we do bfs usually, we create a q, and add the starting node
// as we pop out each node, we calculate the neighboring node s distance and update the distance map

// CORE! we only push the node that has a smaller distance from the source to the q, because we shouldnt be tracking 
// visited node, as all nodes could have new distance depend on the path, if we push all visited node back to q,
// it ll be an infinite loop;
var networkDelayTime = function(times, N, K) {

    // creating a distance map that tracks weights from source node to each nodes;
    const distance = new Array(N + 1).fill(+Infinity),
        graph = buildGraph(times, N) // create adjacent graph;

    const q = [];

    // starting node distance is 0, as K is 0 weight to itself;
    q.push([K, 0])
    distance[K] = 0;

    // main bfs
    while (q.length) {

        const [currNode, currWeight] = q.shift(),
            neighbors = graph[currNode];

        for (let j = 0; j < neighbors.length; j++) {
            const [neighbor, neighborWeight] = neighbors[j];

            //update distance ONLY when the new distance is smaller
            if (distance[neighbor] > currWeight + neighborWeight) {
                distance[neighbor] = currWeight + neighborWeight;
                q.push([neighbor, distance[neighbor]]);
            }
        }
    }

    // node starts from 1, so we delete the "0" node
    distance.shift();

    // find biggest distance
    const ans = distance.reduce((acct, dis) => {
        if (dis > acct) {
            acct = dis;
        };
        return acct;
    }, 0);

    // if there an infinity, that means some nodes are not visited, so its a disconnected graph, we return -1
    // or we return the biggest distance;
    return ans === +Infinity ? -1 : ans;
};


function buildGraph(times, N) {
    const graph = {};
    for (let i = 1; i <= N; i++) {
        graph[i] = [];
    }

    times.forEach(([u, v, w]) => {
        graph[u].push([v, w]);
    });

    return graph;
}