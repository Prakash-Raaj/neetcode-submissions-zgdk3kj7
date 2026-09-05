class Solution:
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        # I should find the euclidean distance for all the points and push elements to the minHeap
        minHeap = []
        for point in points:

            dist = (point[0]) **2 +  point[1] ** 2
            minHeap.append([dist, point[0], point[1]])


        heapq.heapify(minHeap)
        res = []
        while k>=1 and minHeap:
            temp = heapq.heappop(minHeap)
            res.append(temp[1:])  
            k-=1

        return res      
        