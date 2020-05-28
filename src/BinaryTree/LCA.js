// find both paths from root to the nodes
// compare both paths and find intersection
// return the furthest intersection
export function LCA(tree, n1, n2) {
    let path1 = [];
    let path2 = [];

    findPath(tree, n1, path1);
    findPath(tree, n2, path2);
    return findCommonAncestor(path1, path2);
}

// pre order traversal pushes valid node at the beginning of recursion
// return boolean value to determin whether to push to path or not
// 3 scenarios : when node is the target node return true;
//            or when node has left node , and recursive call returns true, meaning target node is in the left subtree
//            or when node has right node, and recursive call returns true , meaning target node is in the right subtree
// falsy scenarios: when node is null, or when truthy conditions dont meet, meaning target node is not in current subtree, 
//                  pop the one already pushed, and return false;
function findPath(node, data, path) {
    if (!node) return false;

    path.push(node);

    if (node.data === data) return true;
    if (node.left && findPath(node.left, data, path)) return true;
    if (node.right && findPath(node.right, data, path)) return true;

    path.pop();
    return false;
}


function findCommonAncestor(path1, path2) {
    let ancestor;

    for (let i = 0; i < path1.length; i++) {
        for (let j = i; j < path2.length; j++) {
            if (path1[i] == path2[j]) {
                ancestor = path2[j];
            }
        }
    }

    return ancestor;
}

// time complexity : o(n^2)


export function lowestCommonAncestor(root, p, q) {
    return dfs(root, p, q);
};

function dfs(node, p, q) {
    if (!node) return null;

    if (node == p || node == q) {
        return node;
    }

    let leftResult = dfs(node.left, p, q);
    let rightResult = dfs(node.right, p, q);

    if (!leftResult) return rightResult;
    if (!rightResult) return leftResult;

    return node;
}