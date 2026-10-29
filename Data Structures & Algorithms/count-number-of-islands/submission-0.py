class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        # loop through the matrix, only if you get 1 then do a bfs on it. 
        # use a visited set count once the bfs is over. 
        # return the resule

        rows = len(grid)
        cols = len(grid[0])
        visited = set()
        islands = 0

        def bfs(r, c):
            q = deque()
            q.append((r, c))
            visited.add((r, c))
            directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]
            while q:
                row, col = q.popleft()
                for dr, dc in directions:
                    nr, nc = row+dr, col+dc
                    if nr<0 or nc<0 or nr>=rows or nc>=cols or (nr, nc) in visited or grid[nr][nc] == "0":
                        continue
                    q.append((nr, nc))
                    visited.add((nr, nc))

        for i in range(rows):
            for j in range(cols):
                if grid[i][j] == "1" and (i, j) not in visited:
                    bfs(i, j)
                    islands+=1
        
        return islands