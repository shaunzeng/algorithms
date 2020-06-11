import { Node, dfsGraph, bfsGraph } from './Graph';
import { verticalOrder, TreeNode, BinaryTree, bfs } from './BinaryTree';



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


/*
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
*/

let t = new TreeNode(3),
    t1 = new TreeNode(9),
    t2 = new TreeNode(8),
    t3 = new TreeNode(4),
    t4 = new TreeNode(0),
    t5 = new TreeNode(1),
    t6 = new TreeNode(7);

t.left = t1;
t.right = t2;
t1.left = t3;
t1.right = t4;
t2.left = t5;
t2.right = t6;

console.log(verticalOrder(t));