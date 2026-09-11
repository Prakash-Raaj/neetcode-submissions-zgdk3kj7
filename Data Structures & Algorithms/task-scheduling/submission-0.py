class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:
        
        # we can push the count and time to a priority queue
        count = Counter(tasks)
        max_heap = [-freq for freq in count.values()]
        heapq.heapify(max_heap)
        q=deque()
        time = 0


        while max_heap or q:
            time+=1

            if max_heap:
                cnt = heapq.heappop(max_heap)+1
                if cnt:
                    q.append([cnt, time+n])
            if q and time==q[0][1]:
                heapq.heappush(max_heap, q.popleft()[0])
        return time


