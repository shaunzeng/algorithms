export function DFS(starting_node) {
    var s = new Stack();
    var visited = [];

    s.push(starting_node);

    while (s.size() != 0) {
        var current = s.pop();

        if (!current.visited) {
            current.visited = true;

            for (var i = 0; i < current.neighbors.length; i++) {
                if (!current.neighbors[i].visited) {
                    s.push(current.neighbors[i]);
                }

            }
        }
    }
}