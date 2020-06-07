export function bfs(root) {
    var q = [];
    q.push(root);

    while (q.size() !== 0) {
        let node = q.shift();

        console.log('node : ', node.data);

        if (node.left) {
            q.push(node.left);
        }

        if (node.right) {
            q.push(node.right);
        }
    }
}