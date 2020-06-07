export class Vertex {
    label;
    constructor(label) {
        this.label = label;
    }
}


export class Graph {
    vertices;
    edges = 0;
    adj = [];

    marked = [];

    constructor(v) {
        this.vertices = v;
        for (let i = 0; i < this.vertices; i++) {
            this.adj[i] = [];
        }

        this.marked = [];
        for (let j = 0; j < this.vertices; j++) {
            this.marked[j] = false;
        }
    }

    addEdge(v, w) {
        this.adj[v].push(w);
        this.adj[w].push(v);
        this.edges++;
    }

    toString() {

    }

    showGraph() {
        for (let i = 0; i < this.vertices; i++) {
            let str = i + ' ->';

            for (let j = 0; j < this.vertices; j++) {
                if (this.adj[i][j] !== void 0) {
                    str += ' ' + this.adj[i][j];
                }
            }

            console.log(str + '\n');
        }
    }

    dfs(v) {
        this.marked[v] = true;

        if (this.adj[v] !== void 0) {
            console.log('visted : ', v, this.adj[v], this.marked);

            for (let i = 0; i < this.adj[v].length; i++) {
                let item = this.adj[v][i];
                if (!this.marked[item]) {
                    this.dfs(item);
                }
            }
        }
    }

    dist = [];
    bfs(v) {
        let queue = [];
        this.marked[v] = true;
        queue.push(v);

        while (queue.length !== 0) {
            let v = queue.shift();
            if (v !== void 0) {
                console.log('visted : ', v);

                for (let i = 0; i < this.adj[v].length; i++) {
                    let w = this.adj[v][i]
                    if (!this.marked[w]) {
                        this.marked[w] = true;
                        queue.push(w);
                    }
                }
            }
        }
    }

    findShortestPath(v, w) {
        let q = [] // queue to do bfs;
        let dist = []; // track distance;
        let currDist = 0;

        q.push(v);
        this.marked[v] = true;
        dist[v] = currDist;
        currDist++;


        while (q.length !== 0) {
            let item = q.shift();

            console.log('visited : ', item);

            for (let i = 0; i < this.adj[v].length; i++) {
                let n = this.adj[v][i];
                if (!this.marked[n]) {
                    this.marked[n] = true;
                    dist[n] = currDist;
                    q.push(n);
                }
            }

            currDist++;
        }

        return dist;
    }
}