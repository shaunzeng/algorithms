//Given a binary tree root and a linked list with head as the first node. 

//Return True if all the elements in the linked list starting from the head correspond to 
//some downward path connected in the binary tree otherwise return False.

//In this context downward path means a path that starts at some node and goes downwards.


//explian 
// start from the root, take every node as entry point to check for the linked listvar isSubPath = function(head, root) {
var isSubPath = function(head, root) {
    if (!root) return false;

    let result = dfs(root, head);

    if (result) {
        return true;
    } else {
        return isSubPath(head, root.left) || isSubPath(head, root.right);
    }
};


function dfs(node, list) {
    if (!list) return true;
    if (list && !node) return false;

    let left, right;

    if (node.val !== list.val) return false;

    left = dfs(node.left, list.next);
    right = dfs(node.right, list.next);

    return left || right;
}