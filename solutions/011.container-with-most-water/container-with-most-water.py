class Solution:
    def maxArea(self, height):
        """
        :type height: List[int]
        :rtype: int
        """
        p1 = 0
        p2 = len(height) - 1

        ret = 0
        while p1 < p2:
            ret = max(min(height[p1], height[p2]) * (p2 - p1), ret)

            if height[p2] > height[p1]:
                p1 += 1
            else:
                p2 -= 1

        return ret
