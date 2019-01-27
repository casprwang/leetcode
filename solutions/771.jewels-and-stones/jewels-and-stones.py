class Solution:
    def numJewelsInStones(self, J, S):
        """
        :type J: str
        :type S: str
        :rtype: int
        """
        cnt = 0
        for s in S:
            if s in J:
                cnt += 1

        return cnt
