export function dijkstra(graph, k) {

    let visited = new Array(graph.length),
        distance = new Array(graph.length),
        path = new Array(graph.length),
        vertexNum = graph.length;

    for (let i = 0; i < vertexNum; i++) {
        distance[i] = Number.POSITIVE_INFINITY;
        visited[i] = false;
    }

    distance[k] = 0;

    const dfs = (src, curr) => {

        visited[curr] = true;


        let neighbors = graph[curr],
            dist = distance[curr];

        for (let i = 0; i < neighbors.length; i++) {
            if (graph[curr][i] == -1 || visited[i]) continue;

            let distanceToI = dist + graph[curr][i];

            if (distanceToI < distance[i]) {
                path[i] = curr;
                distance[i] = distanceToI;
            }

        }

        let minVertex = null,
            minDistance = Number.POSITIVE_INFINITY;
        for (let i = 0; i < distance.length; i++) {

            if (!visited[i] && distance[i] < minDistance) {
                minDistance = distance[i];
                minVertex = i;
            }
        }

        if (minVertex == null) return;

        dfs(src, minVertex);
    }

    dfs(k, k);
    return distance;
}

/*
Dijkstra(graph, 0, distance, path)
print(distance)
print(path)
print('v0->v1')
print('distance: ', distance[1])
stack = [1]
begin = path[1]
while begin != -1:
    stack.append(begin)
begin = path[begin]
print(stack[::-1])*/