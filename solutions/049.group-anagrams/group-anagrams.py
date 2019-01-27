class Solution:
    def groupAnagrams(self, strs):
        """
        :type strs: List[str]
        :rtype: List[List[str]]
        """
        map = {}

        for s in strs:
            pure = self.get_pure(s)
            map[pure] = map.get(pure, []) + [s]

        ret = []

        for _, v in map.items():
            ret.append(v)

        return ret

    @staticmethod
    def get_pure(s):
        return ''.join(sorted(list(s)))
