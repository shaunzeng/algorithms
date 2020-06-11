/*
Given a reference of a node in a connected undirected graph.

Return a deep copy (clone) of the graph.

Each node in the graph contains a val (int) and a list (List[Node]) of its neighbors.
*/

/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */


var cloneGraph = function(node) {
    if (!node) return node;

    let dict = new Dictionary();

    dfs(node, dict);
    return dict.get(node.val);
};

function dfs(node, dict) {

    if (dict.hasNode(node.val)) {
        return dict.get(node.val);
    } else {
        let newNode = new Node(node.val);
        dict.set(newNode.val, newNode);

        for (let i = 0; i < node.neighbors.length; i++) {

            let w = new Node(node.neighbors[i].val);

            newNode.neighbors.push(dfs(w, dict));
        }

        return newNode;
    }
}




class Dictionary {

    dic = {};

    constructor() {}

    set(val, node) {
        this.dic[val] = node;
    }

    get(val) {
        return this.dic[val];
    }

    hasNode(val) {
        return this.dic[val] !== void 0;
    }
}