class Solution:
    def peakIndexInMountainArray(self, A):
        """
        :type A: List[int]
        :rtype: int
        """
        l = 0
        r = len(A) - 1
        while l <= r:
            m = int((l + r)/2)

            if m == 0:
                # go right
                l = m + 1
            elif m == len(A) - 1:
                r = m - 1
            elif A[m] > A[m-1] and A[m] < A[m+1]:
                # up hill, right
                l = m + 1
            elif A[m] < A[m-1] and A[m] > A[m+1]:
                # down hill, left
                r = m - 1
            else:
                # peek
                return m
