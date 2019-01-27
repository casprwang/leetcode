class Solution:
    def combinationSum(self, candidates, target):
        """
        :type candidates: List[int]
        :type target: int
        :rtype: List[List[int]]
        """
        ret = []
        candidates.sort()

        def traverse(pos, tmp, left):
            nonlocal candidates, ret

            if left < 0:
                return

            if left == 0:
                ret.append(tmp)

            for i in range(len(candidates)):
                if i < pos:
                    continue
                traverse(i, tmp + [candidates[i]], left - candidates[i])

        traverse(0, [], target)

        return ret
