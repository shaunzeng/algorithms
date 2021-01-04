/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

class Codec {
    constructor() {

    }

    /** 
     * @param {Node} root
     * @return {string}
     */
    // Encodes a tree to a single string.
    serialize = function(root) {
        if (!root) return '[]';
        return JSON.stringify(serializeHelper(root));
    };

    /** 
     * @param {string} data 
     * @return {Node}
     */
    // Decodes your encoded data to tree.
    deserialize = function(data) {
        let parsed = JSON.parse(data);

        if (parsed.length == 0) return null;

        return deserializeHelper(parsed);
    };
}


function serializeHelper(node) {

    const val = node.val,
        children = node.children,
        level = [];

    level.push(val);

    if (children) {
        let kids = [];

        children.forEach(child => {
            kids.push(serializeHelper(child));
        });

        level.push(kids);
    }

    return level;
}


function deserializeHelper(arr) {

    const node = new Node(arr[0], []),
        children = arr[1];

    if (children.length !== 0) {
        children.forEach(child => {
            node.children.push(deserializeHelper(child));
        })
    }

    return node;
}