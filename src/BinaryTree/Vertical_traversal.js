// leetcode 314

// use colIndex to track cols, as you dfs down the tree,
// mark index -1 as left child index,
// mark index + 1 as right child index,
// have a global min, max colIndex;
// each time you loop thru children, update the min and max col index;
// dfs find min and max col index, then we use bfs to traverse and put node into cols accordingly;
export function verticalOrder(root) {

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

    dfs(root, 0);

    let q = []; // queue
    q.push(root);

    console.log(min, max, max - min);
}