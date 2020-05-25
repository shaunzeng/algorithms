import { BinaryTree, TreeNode } from './BinaryTree/BinaryTree';
import { bfs } from './BinaryTree/BFS';

let bt = new BinaryTree();
bt.root = new TreeNode(56)
bt.root.left = new TreeNode(22);
bt.root.right = new TreeNode(81);
bt.root.left.left = new TreeNode(10);
bt.root.left.right = new TreeNode(30);
bt.root.right.left = new TreeNode(77);
bt.root.right.right = new TreeNode(92);


bfs(bt.root);