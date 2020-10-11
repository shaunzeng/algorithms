import { dijkstra } from './Graph/Dijkstra';
import { biggestValue } from './DP/01Knapsack';

let graph = [
    [0, 50, 10, -1, 45, -1],
    [-1, 0, 15, -1, 5, -1],
    [20, -1, 0, 15, -1, -1],
    [-1, 20, -1, 0, 35, -1],
    [-1, -1, -1, 30, 0, -1],
    [-1, -1, -1, 3, -1, 0]
];

dijkstra(graph, 0);

console.log(biggestValue([2, 4, 3, 5], [30, 70, 50, 60], 5));