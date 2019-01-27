class Solution:
    def merge(self, nums1, m, nums2, n):
        """
        :type nums1: List[int]
        :type m: int
        :type nums2: List[int]
        :type n: int
        :rtype: void Do not return anything, modify nums1 in-place instead.
        1 2 3 0 0 0
        2 5 6

        5
        1 2 2 3 5 0
        |     |
                |
                |
        """
        import heapq
        h = []

        for i in range(m):
            heapq.heappush(h, nums1[i])

        for i in range(n):
            heapq.heappush(h, nums2[i])

        for i in range(len(nums1)):
            nums1[i] = heapq.heappop(h)
