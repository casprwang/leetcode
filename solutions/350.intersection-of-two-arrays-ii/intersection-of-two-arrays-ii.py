class Solution:
    def intersect(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: List[int]
        123
        34
        """
        m1 = {}
        m2 = {}
        ret = []

        for n1 in nums1:
            m1[n1] = m1.get(n1, 0) + 1

        for n2 in nums2:
            m2[n2] = m2.get(n2, 0) + 1

        for n in set(nums2):
            ret += [n] * min(m1.get(n, 0), m2.get(n, 0))

        return ret
