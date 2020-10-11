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

/*
// Author: Huahua
// Running time: 36 ms
class Solution {
    public:
      int findCheapestPrice(int n, vector<vector<int>>& flights, int src, int dst, int K) {
        g_.clear();  
        for (const auto& e : flights)
          g_[e[0]].emplace_back(e[1], e[2]);
        vector<int> visited(n, 0);
        visited[src] = 1;
        int ans = INT_MAX;
        dfs(src, dst, K + 1, 0, visited, ans);
        return ans == INT_MAX ? - 1 : ans;
      }
    private:
      unordered_map<int, vector<pair<int,int>>> g_;
      
      void dfs(int src, int dst, int k, int cost, vector<int>& visited, int& ans) {
        if (src == dst) {
          ans = cost;
          return;
        }
        
        if (k == 0) return;    
        
        for (const auto& p : g_[src]) {
          if (visited[p.first]) continue; // do not visit the same city twice.
          if (cost + p.second > ans) continue; // IMPORTANT!!! prunning 
          visited[p.first] = 1;
          dfs(p.first, dst, k - 1, cost + p.second, visited, ans);
          visited[p.first] = 0;
        }
      }
    };





    class Solution {
    
        private int[][] adjMatrix;
        private HashMap<Pair<Integer, Integer>, Long> memo;
        
        public int findCheapestPrice(int n, int[][] flights, int src, int dst, int K) {
         
            this.adjMatrix = new int[n][n];
            this.memo = new HashMap<Pair<Integer, Integer>, Long>();
            
            for (int[] flight: flights) {
                this.adjMatrix[flight[0]][flight[1]] = flight[2];
            }
                
            long ans = this.findShortest(src, K, dst, n);
            return ans >= Integer.MAX_VALUE ? -1 : (int)ans;
        }
        
        public long findShortest(int node, int stops, int dst, int n) {
            
            // No need to go any further if the destination is reached    
            if (node == dst) {
                return 0;
            }
                
            
            // Can't go any further if no stops left
            if (stops < 0) {
                return Integer.MAX_VALUE;
            }
                
            Pair<Integer, Integer> key = new Pair<Integer, Integer>(node, stops);
        
        
            // If the result of this state is already cached, return it
            if (this.memo.containsKey(key)) {
                return this.memo.get(key);
            }
            
            // Recursive calls over all the neighbors
            long ans = Integer.MAX_VALUE;
            for (int neighbor = 0; neighbor < n; ++neighbor) {
                
                int weight = this.adjMatrix[node][neighbor];
                
                // 0 value means no edge
                if (weight > 0) {
                    ans = Math.min(ans, this.findShortest(neighbor, stops - 1, dst, n) + weight);            
                }  
            } 
            
            // Cache the result
            this.memo.put(key, ans);
            return ans;
        }
    }

 //   dp[i][j]:从src结点出发，经过i条边后到达j号结点的最短距离
    class Solution:
    def findCheapestPrice(self, n: int, flights: List[List[int]], src: int, dst: int, K: int) -> int:
        if src == dst:
            return 0
        graph = [[] for _ in range(n)]
        for u, v, w in flights:
            graph[u].append([v, w])

        dp = [[float('inf')] * n for _ in range(K+1)]
        for v, w in graph[src]:
            dp[0][v] = w
        
        for k in range(K):
            dp[k][src] = 0

        for k in range(1, K+1):
            for j in range(n):
                if dp[k-1][j] != float('inf'):
                    for v, w in graph[j]:
                        dp[k][v] = min(dp[k][v], dp[k-1][j] + w)
    
        return dp[K][dst] if dp[K][dst] != float('inf') else -1
        */