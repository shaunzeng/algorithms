import { BinaryTree, TreeNode } from './BinaryTree/BinaryTree';
import { bfs } from './BinaryTree/BFS';

import { Node, dfsGraph, bfsGraph } from './Graph';
/*
let bt = new BinaryTree();
bt.root = new TreeNode(56)
bt.root.left = new TreeNode(22);
bt.root.right = new TreeNode(81);
bt.root.left.left = new TreeNode(10);
bt.root.left.right = new TreeNode(30);
bt.root.right.left = new TreeNode(77);
bt.root.right.right = new TreeNode(92);


bfs(bt.root);*/

let g = new Node(0),
    g1 = new Node(1),
    g2 = new Node(2),
    g3 = new Node(3),
    g4 = new Node(4),
    g5 = new Node(5);

g.neighbors = [g1, g2];
g1.neighbors = [g, g3];
g2.neighbors = [g, g3, g4];
g3.neighbors = [g1, g2, g5];
g4.neighbors = [g2, g5];
g5.neighbors = [g3, g4];

bfsGraph(g);
console.log(' ');
console.log(' ');
dfsGraph(g);