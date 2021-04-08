// leetcode 314

// use colIndex to track cols, as you dfs down the tree,
// mark index -1 as left child index,
// mark index + 1 as right child index,
// have a global min, max colIndex;
// each time you loop thru children, update the min and max col index;
// dfs find min and max col index, then we use bfs to traverse and put node into cols accordingly;
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalOrder = function(root) {
    if (!root) return [];

    let min = 0,
        max = 0,
        ans = [];


    const dfs = (node, index) => {
        if (!node) return;

        min = Math.min(min, index); // update min index;
        max = Math.max(max, index); // update max index;

        dfs(node.left, index - 1); // move col index to left;
        dfs(node.right, index + 1); // move col index to right
    }

    dfs(root, 0); // find min col index and max col index;



    // bfs
    let q = []; // queue
    q.push({ node: root, index: 0 });


    while (q.length !== 0) {
        let { node, index } = q.shift();

        let realIndex = index - min; // find the index offset

        ans[realIndex] = ans[realIndex] || []; // init that index positon in ans if its undefined

        ans[realIndex].push(node.val);

        if (node.left) {
            q.push({ node: node.left, index: index - 1 }); // index -1 when read left child
        }

        if (node.right) {
            q.push({ node: node.right, index: index + 1 }); // index +1 when read right child
        }
    }

    return ans;
}