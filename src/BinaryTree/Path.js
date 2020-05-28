export function findPath(root, target, path) {
    if (!root) return false;
    path.push(node);

    if (node.data === target) return true;
    if (node.left && findPath(node.left, target, path)) return true;
    if (node.right && findPath(node.right, target, path)) return true;

    path.pop();
    return false;
}

let path = []; // global var that tracks path;