/*
 * @Input Node {val, neighbors}
 *
 */

// dict is a global hash table that tracks visited node
export function dfsGraph(v, dict = {}) {

    dict['' + v.value] = true;

    console.log('curr: ', v.value);

    if (v.neighbors.length !== 0) {
        for (let i = 0; i < v.neighbors.length; i++) {
            let w = v.neighbors[i];

            if (!dict['' + w.value]) {
                dfsGraph(w, dict);
            }
        }
    }
}