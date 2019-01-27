class Solution(object):
    def findKthLargest(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: int
        """
        import heapq

        heap = []
        for n in nums:
            heap.append(-n)

        heapq.heapify(heap)
        count = 0
        ret = None

        while count < k:
            ret = heapq.heappop(heap)
            count += 1

        return -ret
