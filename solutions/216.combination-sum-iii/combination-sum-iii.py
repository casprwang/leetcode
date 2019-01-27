class Solution:
    def combinationSum3(self, k, n):
        """
        :type k: int
        :type n: int
        :rtype: List[List[int]]
        """
        ret = []

        def traverse(cur, tmp, target, used):
            nonlocal k, ret
            if used > k:
                return

            if target < 0:
                return

            if target == 0 and used == k:
                ret.append(tmp)

            for num in range(cur, 10):
                traverse(num + 1, tmp + [num], target - num, used + 1)

        traverse(1, [], n, 0)

        return ret
