export function findPath(root, target, path) {

    let path = []; // global var that tracks path;

    const find = (node) => {
        if (!node) return false;

        path.push(node);

        if (node.data === target) return true;
        if (node.left && find(node.left, target, path)) return true;
        if (node.right && find(node.right, target, path)) return true;

        path.pop();
        return false;
    }

    return find(root);
}