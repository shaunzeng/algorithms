import { InsertionSort } from './InsertionSort';

export function BucketSort(arr) {
    if (arr.length < 2) return arr;

    let buckets = {},
        len = arr.length;

    for (let i = 0; i < len; i++) {

        let idx = Math.floor(len * arr[i]);

        if (!buckets[idx]) {
            buckets[idx] = [];
        }

        buckets[idx].push(arr[i]);
    }

    let output = [];


    for (let item in buckets) {
        buckets[item] = InsertionSort(buckets[item]);
    }

    for (let item in buckets) {
        output = [...output, ...buckets[item]];
    }

    return output;
}

//Bucket sort is useful when the array is uniformly distributed over a range

//console.log(BucketSort([0.8, 0.09, 0.1, 0.22, 0.53, 0.8, 0.10, 0.12, 0.3, 0.63, 0.34, 0.4, 0.13, 0.5, 0.6, 0.76, 0.73, 0.1, 0.675, 0.7, 0.68]));