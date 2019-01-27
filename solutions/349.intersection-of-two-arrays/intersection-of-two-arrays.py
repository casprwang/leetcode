class Solution:
    def intersection(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: List[int]
        """
        s = set(nums1)

        ret = set()
        for n in nums2:
            if n in s:
                ret.add(n)

        return list(ret)
