class Solution:
    def maxSlidingWindow(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: List[int]
        [1,3,-1,-3,5,3,6,7]
         0 1 2  3  4
            [     ]|
               [     ]
            i-k    i
        [1]
        [3]
        [3, -1]
        """
        from collections import deque
        q = deque()
        ret = []

        for i, v in enumerate(nums):
            # remove out of window indexes
            edge = i - k
            while q and q[0] <= edge:
                q.popleft()

            # remove smaller
            while q and nums[q[-1]] < v:
                q.pop()

            q.append(i)

            if i >= k-1:
                ret.append(nums[q[0]])

        return ret
