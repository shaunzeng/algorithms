/*
 * @Input Node {val, neighbors}
 *
 */

// dict is a global hash table that tracks visited 
export function bfsGraph(v, dict = {}) {
    let q = [];

    q.push(v);
    dict['' + v.value] = true;

    while (q.length !== 0) {
        let n = q.shift();

        console.log('curr ', n.value);


        for (let i = 0; i < n.neighbors.length; i++) {
            let w = n.neighbors[i];

            if (!dict['' + w.value]) {
                dict['' + w.value] = true;
                q.push(w);
            }
        }
    }
}