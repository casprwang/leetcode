# Definition for an interval.
# class Interval:
#     def __init__(self, s=0, e=0):
#         self.start = s
#         self.end = e
import heapq


class Solution:
    def minMeetingRooms(self, intervals):
        intervals.sort(key=lambda x: x.start)
        heap = []  # stores the end time of intervals
        for i in intervals:
            if heap and i.start >= heap[0]:
                # no need to allocate
                heapq.heappop(heap)
                heapq.heappush(heap, i.end)
            else:
                heapq.heappush(heap, i.end)

        return len(heap)
