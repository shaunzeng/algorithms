var zigzagLevelOrder = function(root) {
    if (!root) return [];
    ans = [];
    bfs(root);
    return ans;
};
var ans = [];

function bfs(root) {
    let q = [];
    q.push({ node: root, depth: 0 });
    while (q.length !== 0) {
        let { node, depth } = q.shift();
        if (node.left) {
            q.push({ node: node.left, depth: depth + 1 });
        }
        if (node.right) {
            q.push({ node: node.right, depth: depth + 1 });
        }
        if (!ans[depth]) {
            ans[depth] = [];
        }
        if (depth % 2 == 0) {
            ans[depth].push(node.val);
        } else {
            ans[depth].unshift(node.val);
        }
    }
}