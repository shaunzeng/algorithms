export function findPath(root, target) {

    let path = []; // global var that tracks path;

    const find = (node) => {
        if (!node) return false;

        path.push(node);

        if (node.data === target) return true;
        if (node.left && find(node.left)) return true;
        if (node.right && find(node.right)) return true;

        path.pop();
        return false;
    }

    let result = find(root);

    if (result) return path;
    else return false;
}