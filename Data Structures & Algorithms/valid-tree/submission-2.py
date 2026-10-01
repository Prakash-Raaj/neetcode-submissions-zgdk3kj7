class Solution:
    def validTree(self, n: int, edges: List[List[int]]) -> bool:
        parent = list(range(n))

        if len(edges) != n-1:
            return False

        def find(x):
            if parent[x] != x:
                parent[x] = find(parent[x])
            return parent[x]
        
        for u, v in edges:

            root_u = find(u)
            root_v = find(v)

            if root_u == root_v:
                return False
            
            parent[root_u] = root_v
        
        return True