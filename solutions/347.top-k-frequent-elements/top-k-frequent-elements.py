import heapq


class Solution:
    def topKFrequent(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: List[int]
        """
        m = {}

        for n in nums:
            if n in m:
                m[n] += 1
            else:
                m[n] = 0

        max_heap = []
        for key, times in m.items():
            heapq.heappush(max_heap, (times * -1, key))

        ret = []
        while k:
            ret.append(heapq.heappop(max_heap)[1])
            k -= 1

        return ret
