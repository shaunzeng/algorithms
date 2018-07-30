import { selectionSort, 
    bubbleSort , 
    recursiveBubbleSort, 
    insertionSort, 
    mergeSort, 
    MinIntHeap, 
    heapSort} from "./sorting_algorithm";
import * as logger from 'simple-node-logger';

let log = logger.createSimpleLogger();
let testCase = [64,25,12,22,11, 90, 80];
let testCase2 = [2759, 383, 4285, 5353, 3332, 7986, 5424, 5009, 8644, 3018, 8192, 5575, 4621, 4482, 7021, 4245, 6427, 3116, 4328, 6728, 779, 2378, 5204, 9777, 2002, 8182, 1958, 7912, 2408, 6561, 2010, 8542, 3400, 1875, 8163, 7833, 2435, 9731, 1978, 1489, 2972, 8130, 2275, 6740, 235, 3744, 6189, 6267, 4767, 4065, 5310, 6723, 5020, 2398, 8253, 5473, 1192, 6860, 4355, 6641, 3594, 4164, 2875, 3404, 5545, 4045, 9738, 8452, 598, 7129, 1297, 8423, 8578, 2913, 3865, 6640, 7624, 9591, 7108, 138, 6766, 570, 7838, 72, 9340, 6759, 7993, 2904, 8643, 1788, 4252, 2046, 4604, 5119, 6940, 524, 4896, 878, 7648, 5097];

let tests = [testCase]

function runTest(func){

    tests.forEach((val, idx) => {
        console.log('Input : ', val);
        let d = new Date();
        console.log('Output ' + idx + ' ', func(val));

        let d2 = new Date();
        log.info('Time spent in Milliseconds: ' , d2.getMilliseconds() - d.getMilliseconds());
    });

    
}

runTest(heapSort);
