import { Queue } from '../Queue/Queue';

export function bfs(root) {
    var q = new Queue;
    q.enqueue(root);

    while (q.size() !== 0) {
        let node = q.dequeue();

        console.log('node : ', node.data);

        if (node.left) {
            q.enqueue(node.left);
        }

        if (node.right) {
            q.enqueue(node.right);
        }
    }
}