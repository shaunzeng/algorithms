import { TreeNode } from './BinaryTree';
// overall the idea is to find the root by looking at preorder, then split two left subtree and right subtree, while
// finding out the right length of the pre, post or in for left or right subtree
// return the node itself, or return null when its done;
// when looking to split for new post , in or pre for left or right, make sure to EXCLUDE the root node!!! 



// preorder + inorder
export function constructBTPreIn(preorder, inorder) {
    if (preorder.length == 0 || inorder.length == 0 || inorder.length !== preorder.length) return null;
    return dfs(preorder, inorder);
};

function dfs(preorder, inorder) {

    if (pre.length < 1) return null

    let node = new TreeNode(pre[0]);
    let rootIdxInInd = ind.indexOf(pre[0]); // find root index in inorder;

    // new left inorder is from left to the root index, not inclduing root index;
    let newLeftInd = ind.slice(0, rootIdxInInd);
    // new right preorder is from 1 position to the length of left subtree, +1 is to include entire length;
    let newLeftPre = pre.slice(1, newLeftInd.length + 1);

    // new right inorder is from root index+1 to end
    let newRightInd = ind.slice(rootIdxInInd + 1, ind.length);
    // new right pre is from where left ends to the end;
    let newRightPre = pre.slice(1 + newLeftInd.length, pre.length);

    node.left = dfs(newLeftPre, newLeftInd);
    node.right = dfs(newRightPre, newRightInd);

    return node;

}

// preorder first one is always the parent, find the parent index in
// inorder array, and split the array into left and right, left array
// is the left subtree, right array is right subtree, do it recursively






// postorder + inorder
export function constructBTPostIn(postorder, inorder) {
    if (postorder.length == 0 || inorder.length == 0 || inorder.length !== postorder.length) return null;
    return dfs2(inorder, postorder);
}

function dfs2(ind, post) {
    if (ind.length < 1) return null;

    let node = new TreeNode(post[post.length - 1]);
    let rootIdxInInd = ind.indexOf(post[post.length - 1]);

    let newLeftInd = ind.slice(0, rootIdxInInd);
    let newLeftPost = post.slice(0, newLeftInd.length);

    let newRightInd = ind.slice(rootIdxInInd + 1, ind.length);
    let newRightPost = post.slice(0 + newLeftPost.length, post.length - 1);

    node.left = dfs2(newLeftInd, newLeftPost);
    node.right = dfs2(newRightInd, newRightPost);

    return node;
}



// preorder + postorder
// first item in preorder, or last item in postorder are the root node;
// the next of first item in preorder is the left subtree root;
// to find the length of the left subtree, find the index of the left root in post order
// split post order in halves, the left half is the left subtree, vs the right half is the right subtree
// recursively spliting left and right to find its root, till pre or post run out;

export function constructBTPrePost(preorder, postorder) {
    if (preorder.length == 0 || inorder.length == 0 || inorder.length !== preorder.length) return null;
    return dfs3(preorder, postorder);
}

function dfs3(pre, post) {
    // when run out of pre or post, return null to end recursion;
    if (pre.length < 1) return null;

    //create root node
    let node = new TreeNode(preorder[0]);
    pre.shift(); // remove root in pre
    post.pop(); // remove root in post;

    let leftRoot = pre[0]; // find left subtree root;
    // find index for the left subtree root in post, to find out the length of left subtree
    let leftRootIdxInPost = post.indexOf(leftRoot);

    // find left subtree in post, +1 is to include the leftrootindexInPost item
    let newLeftPost = post.slice(0, leftRootIdxInPost + 1);
    // new left pre is the next to root till the length (not including the length index);
    let newLeftPre = pre.slice(0, newLeftPost.length);

    // new right post is the index and after in post
    let newRightPost = post.slice(leftRootIdxInPost + 1, post.length);
    //new right pre is left length to the end of pre;
    let newRightPre = pre.slice(newLeftPre.length, pre.length);

    node.left = dfs3(newLeftPre, newLeftPost);
    node.right = dfs3(newRightPre, newRightPost);

    return node;
}



// construct binary search tree from preorder
// inorder is a acceding array for a binary search tree, so sort the preorder to an acending order you ll get the inorder array,
// then the rest if the same as preorder + inorder
export function constructBSTPre(preorder) {
    if (!preorder || preorder.length == 0) return [];

    var inorder = [...preorder].sort((a, b) => a - b);
    return dfs4(preorder, inorder);
}

function dfs4(pre, ind) {
    if (pre.length < 1) return null

    let node = new TreeNode(pre[0]);
    let rootIdxInInd = ind.indexOf(pre[0]);


    let newLeftInd = ind.slice(0, rootIdxInInd);
    let newLeftPre = pre.slice(1, newLeftInd.length + 1);

    let newRightInd = ind.slice(rootIdxInInd + 1, ind.length);
    let newRightPre = pre.slice(1 + newLeftInd.length, pre.length);

    node.left = dfs4(newLeftPre, newLeftInd);
    node.right = dfs4(newRightPre, newRightInd);

    return node;

}